import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    if (err instanceof HttpError) {
        return res.status(err.status).json({
            status: err.status,
            message: err.name,
            data: err,
        });
    }

    res.status(500).json({
        status: 500,
        message: err.message || 'Internal server error',
        data: err,
    });
};