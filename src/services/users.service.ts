import UserEmails from "../models/User.model"
import { ConflictError } from "../errors/ConflictError"

type CreateUserRequest = {
    email: string;
}

const createUser = async ( { email }: CreateUserRequest) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        throw new ConflictError('User with this email already exists');
    } 
    
    const newUser = new UserEmails({ email });
    await newUser.save();
    return newUser;
}

const getUserByEmail = async (email: string) => {
    return await UserEmails.findOne({
        email
    });
}

export default {
    createUser,
    getUserByEmail
}