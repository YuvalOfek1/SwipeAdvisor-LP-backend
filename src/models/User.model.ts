import mongoose, { Schema } from "mongoose"
export type IUser = {
    id: Schema.Types.ObjectId;
    email: string;
}
const UserSchema = new Schema<IUser>({
        email: { type: String,required: true, unique: true},
    },
    { timestamps: true }
);

const User =  mongoose.model<IUser>('User', UserSchema);

export default User;