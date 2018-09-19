"use strict";
const { Writable } = require("stream");

const CommonFormatter = require("./formatter/common");

class Transport extends Writable {
  constructor(opts) {
    opts = Object.assign({ objectMode: true }, opts || {});
    super(opts);

    this.formatter = opts.formatter || new CommonFormatter();
  }

  _write(chunk, encoding, callback) {
    // console.log(chunk)
    // Todo 格式化
    if (chunk) {
      return this.log(chunk, callback);
    }
    return callback(null);
  }
}

module.exports = Transport;
