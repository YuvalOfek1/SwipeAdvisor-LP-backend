import mongoose, { Schema } from "mongoose"
export type IUserEmail = {
    id: Schema.Types.ObjectId;
    email: string;
}
const UserEmailSchema = new Schema<IUserEmail>({
        email: { type: String,required: true, unique: true},
    },
    { timestamps: true, collection: 'userEmails' }
);

const UserEmails =  mongoose.model<IUserEmail>('UserEmails', UserEmailSchema);

export default UserEmails;
