import { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

export default function globalExceptionHandler(
  err: Error,
  resquest: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
