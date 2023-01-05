import Fastify from "fastify";
import dotenv from "dotenv";
import closeWithGrace from "close-with-grace"; // Require library to exit fastify process, gracefully (if possible)

import appPlugin from "./app";
import { FASTIFY_CLOSE_GRACE_DELAY, APP_PORT } from "../configs/configuration";

// Read the .env file.
dotenv.config();

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

//** CallBack function that closes the app*/
const closeFunction: closeWithGrace.CloseWithGraceAsyncCallback = async ({
  signal,
  err,
  manual,
}) => {
  if (err) {
    app.log.error(err);
  }
  await app.close();
};

// Register the application as a normal plugin.
app.register(appPlugin);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace(
  { delay: FASTIFY_CLOSE_GRACE_DELAY || 500 },
  closeFunction
);

app.addHook("onClose", (_instance, done) => {
  closeListeners.uninstall();
  done();
});

console.log({ APP_PORT, FASTIFY_CLOSE_GRACE_DELAY });
// Start listening.
app.listen({ port: APP_PORT || 3447 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
