"use strict";
const stream = require("stream");
const levels = require("./levels");

class Logger extends stream.Transform {
  constructor(opts) {
    opts = Object.assign({ objectMode: true }, opts || {})
    super(opts);
    this.opts = opts;
    this.transports = new Map();
  }

  log(level, message, meta) {
    if (!Object.keys(levels).includes(level)) {
      throw new Error(`level '${level}' invalid`);
    }

    this.write({ level: level, message: message, meta: meta });
  }

  add(transport) {
    this.pipe(transport);
  }

  _transform(chunk, encoding, callback) {
    callback(null, chunk);
  }

  _flush(callback) {
    callback();
  }
}

[
  "emergency",
  "alert",
  "critical",
  "error",
  "warn",
  "notice",
  "info",
  "debug"
].forEach(level => {
  const LEVEL = level.toUpperCase();
  Logger.prototype[level] = function() {
    this.log(LEVEL, ...arguments);
  };
});

module.exports = Logger;
