export const REDIRECTED_COOKIE = "redirected-cookie";
export const AUTH_PROVIDER_PATH = "/jwt";

/** 10 Seconds. */
export const EXPIRARION_TIME = 10 * 1000;

export const REDIRECT_ERRORS = new Map<string, boolean>([
  ["FST_JWT_AUTHORIZATION_TOKEN_EXPIRED", true],
  ["FST_JWT_NO_AUTHORIZATION_IN_COOKIE", true],
]);
