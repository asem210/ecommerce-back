class ServiceResponse {
  constructor() {
    this.success = false;
    this.message = null;
    this.data = null;
  }

  setSucessResponse(message, data) {
    this.success = true;
    this.message = message;
    this.data = data;
  }

  setErrorResponse(message) {
    this.message = message;
  }
}

module.exports = ServiceResponse;
