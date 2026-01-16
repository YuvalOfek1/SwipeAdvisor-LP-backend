import mongoose from "mongoose"

export const connectToMongoDB = () => {
    const dbURI = process.env.MONGO_URI || null;
    if(!dbURI) throw new Error('MONGO_URI is not defined in environment variables');
    mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Failed to connect to MongoDB');
    });
}