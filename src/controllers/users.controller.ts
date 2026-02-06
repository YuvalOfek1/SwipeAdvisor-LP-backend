import usersService from "../services/users.service";
import { Request, Response } from "express";
import { ConflictError } from "../errors/ConflictError";

const createUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const newUser = await usersService.createUser({ email });
        res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof ConflictError) {
            res.status(409).json({ message: error.message });
            return;
        }
        res.status(500).json({ message: error.message });
    }
};

export default {
    createUser
}
