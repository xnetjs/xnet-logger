"use strict";
const fs = require("fs");
const os = require("os");
const Transport = require("../transport");

class FileTransport extends Transport {
  constructor(options) {
    super(options);

    this.stream = this.createStream(options.path);
  }

  log(data, callback) {
    this.stream.write(this.formatter.format(data) + os.EOL);
    if (callback) {
      callback();
    }
  }

  createStream(path) {
    // Todo mkdir path
    let writeStream = fs.createWriteStream(path, {
      flags: "a",
      encoding: "utf8",
      fd: null,
      mode: 0o666,
      autoClose: true
    });
    return writeStream;
  }
}

module.exports = FileTransport;
