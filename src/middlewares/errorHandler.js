import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      data: err,
      message: err.name,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: '',
    data: err,
  });
  
  function errorHandler(err, req, res, next) {
    console.error('Error:', err);
  
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  }
  
  app.use(errorHandler);
};
