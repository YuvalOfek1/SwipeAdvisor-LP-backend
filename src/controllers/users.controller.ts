import usersService from "../services/users.service";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const newUser = await usersService.createUser({ email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    createUser
}
