"use strict";
const Transport = require("../transport");

const ConsoleFormatter = require("../formatter/console");

class ConsoleTransport extends Transport {
  constructor(opts) {
    opts = opts || {};
    if (!opts.formatter) {
      opts.formatter = new ConsoleFormatter();
    }
    super(opts);
  }

  log(data, callback) {
    console.log(this.formatter.format(data));
    if (callback) {
      callback();
    }
  }
}

module.exports = ConsoleTransport;
