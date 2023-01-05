/** JWT verification won't be enabled on all paths with the value true in this map*/
const UNSECURED_PATHS = new Map<string, boolean>([
  ["/", true],
  ["/alpha", true],
  ["/getJWT", true],
  ["/getJWT/cookies", true],
]);

/** Works for both paths /pathName and /pathName/ insted of add 2 entries to the map*/
function isUnsecured(path: string) {
  if (path.length > 1 && path.slice(-1) === "/") {
    path = path.substring(0, path.length - 1);
  }
  console.log(path);
  console.log(UNSECURED_PATHS.get(path));
  return UNSECURED_PATHS.get(path);
}

/** Sets the map.get to map.get(isUnsecured(pathName)) */
const UNSECURED_PATHS_PROXY = new Proxy(UNSECURED_PATHS, {
  get(UNSECURED_PATHS, property) {
    if (property === "get") return isUnsecured;
    return Reflect.get(UNSECURED_PATHS, property);
  },
});

export default UNSECURED_PATHS_PROXY;
