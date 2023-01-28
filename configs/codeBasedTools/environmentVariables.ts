function loadEnvironmentVariable(keyname: string) {
  const envVar = process.env[keyname];

  if (envVar) return envVar;

  /** If we coud not find the environment variable throw an error */
  throw new Error(`Configuration must include ${keyname}`);
}

export const SECRET_KEY = loadEnvironmentVariable("JWT_SECRET_KEY");
export const FASTIFY_CLOSE_GRACE_DELAY = Number(
  loadEnvironmentVariable("FASTIFY_CLOSE_GRACE_DELAY")
);
export const APP_PORT = Number(loadEnvironmentVariable("APP_PORT"));
export const ACCESS_TOKEN = loadEnvironmentVariable("ACCESS_TOKEN");
export const ACCESS_TOKEN_EXPIRE = loadEnvironmentVariable(
  "ACCESS_TOKEN_EXPIRE"
);
export const APPLICATION_NAME = loadEnvironmentVariable("APPLICATION_NAME");
