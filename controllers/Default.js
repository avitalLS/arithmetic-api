'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.calculate = function calculate (req, res, next, body, authorization) {
  Default.calculate(body, authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
