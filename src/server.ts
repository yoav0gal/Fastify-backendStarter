import * as dotenv from "dotenv";
// Loads the .env variables
dotenv.config();
import Fastify from "fastify";
import closeWithGrace from "close-with-grace";
import appPlugin from "./app";
import { FASTIFY_CLOSE_GRACE_DELAY, APP_PORT } from "EnvironmentVariables";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

// Instantiate Fastify with some config
const app = Fastify({
  logger: {
    timestamp: () =>
      `,"time":"${new Date(Date.now()).toString().slice(4, 24)}"`,
    level: "info",
    file: "./debug.log",
  },
}).withTypeProvider<TypeBoxTypeProvider>();

// Register your application as a normal plugin.
app.register(appPlugin);

// Delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace(
  { delay: FASTIFY_CLOSE_GRACE_DELAY || 500 },
  async function ({ signal, err, manual }) {
    if (err) {
      app.log.error(err);
    }
    await app.close();
  } as closeWithGrace.CloseWithGraceAsyncCallback
);

app.addHook("onClose", async (instance, done) => {
  closeListeners.uninstall();
  done();
});

// Start listening.
app.listen({ port: APP_PORT || 3000 }, (err: any) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
