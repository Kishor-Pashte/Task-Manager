const errMiddleware = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 500;

  return res.status(statusCode).json(message);
};

export default errMiddleware;
