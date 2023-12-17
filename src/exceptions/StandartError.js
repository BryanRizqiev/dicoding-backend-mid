
class ClientError extends Error {
    constructor(message, statusCode = 500) {
      super(message)
      this.statusCode = statusCode
      this.name = "Server error"
    }
  }
   
module.exports = ClientError
