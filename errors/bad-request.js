const CustomAPIError = require('./custom-error');
const {StatusCodes} = require('http-status-codes');
class BadResquest extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST //al usar la libreria de npm http-status-code podemos usar esto, si no le mandaríamos el codigo http correspondiente
    }
  }
  
  module.exports = BadResquest
  