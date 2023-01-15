module.exports = {
  level: "info",
  file: "../debug.log",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};
