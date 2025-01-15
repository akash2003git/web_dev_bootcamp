class AppError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

// the default Error class in js does not have a status property
// so we extended it
//
// The res.statusCode is set from err.status (or err.statusCode).
// If this value is outside the 4xx or 5xx range, it will be set to 500.

module.exports = AppError;
