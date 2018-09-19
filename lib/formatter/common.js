"use strict";
const util = require("xnet-util");

const Formatter = require("../formatter");

class CommonFormatter extends Formatter {
  format(info) {
    return `${util.logDate()} [${info.level}] ${process.pid} ${
      info.message
    }`;
  }
}

module.exports = CommonFormatter;
