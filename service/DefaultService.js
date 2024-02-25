'use strict';


/**
 * Perform arithmetic operation on two numbers
 *
 * body Calculate_body 
 * authorization String 
 * returns inline_response_200
 **/
exports.calculate = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

