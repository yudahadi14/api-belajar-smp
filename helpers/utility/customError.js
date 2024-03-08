class CustomError extends Error {
  constructor(msg = "", ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.name = "CustomError";
    this.message = msg;
  }
}

module.exports = CustomError;
