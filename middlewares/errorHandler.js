const httpStatus = require('http-status');

module.exports = (err, req, res, next) => {
  try {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const response = {
      code: statusCode,
      message: err.message || httpStatus[statusCode],
      stack: err.stack,
    };

    if (req.app.get('env') !== 'development') {
      delete response.stack;
    }
    res.status(statusCode);
    return res.json(response);
  } catch (error) {
    console.log('Log: error', error);
    return res.json({});
  }
};
