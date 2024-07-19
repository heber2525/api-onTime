const handleError = (error, req, res, next) => {
  console.log(error.stack);
  const statusCode = error.status || 500;
  res.status(statusCode).send({
    message: error.message || "internal server error",
  });
};
module.exports = handleError;
