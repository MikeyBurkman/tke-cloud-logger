'use strict';

var bunyan = require('bunyan')
  , util = require('./util.js');

/**
 * Returns a logger instance with the given name
 * @param  {String} name
 * @return {Object}
 */
exports.getLogger = function (opts) {
  return bunyan.createLogger({
    name: util.generateName(opts.name),
    level: util.getLogLevel(),
    src: util.isDev(),
    streams: util.getDefaultStreams()
  });
};