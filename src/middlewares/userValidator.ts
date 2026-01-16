import {Request, Response, NextFunction} from 'express';

const validateCreateUserRequest = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Invalid or missing email' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
};

export default {
    validateCreateUserRequest
}