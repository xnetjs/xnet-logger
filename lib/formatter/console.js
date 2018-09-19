"use strict";
const util = require("xnet-util");
const chalk = require("chalk");

const Formatter = require("../formatter");

class ConsoleFormatter extends Formatter {
  format(info) {
    const colorFn = this.getColor(info.level);
    const message = util.isString(info.message) ? info.message : JSON.stringify(info.message)
    info.meta = info.meta || ''
    const meta = util.isString(info.meta) ? info.meta : JSON.stringify(info.meta)
    return chalk[colorFn](
      `${process.pid}|${process.title} ${util.logDate()} [${info.level}] ${message} ${meta}`
    );
  }

  getColor (level) {
    let color = "green";
    switch (level) {
      case "EMERGENCY":
      case "ALERT":
      case "CRITICAL":
      case "ERROR":
        color = "red";
        break;
      case "WARN":
        color = "yellow";
        break;
      case "DEBUG":
        color = "blue";
        break;
      default:
    }

    return color;
  }
}

module.exports = ConsoleFormatter;
