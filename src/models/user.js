import { mongoose, Model, Schema, Document } from "mongoose";

// interface IUser extends Document {
//     name: string;
//     email: string;
//     password: string;
// }

// const userSchema = new Schema<IUser>({ new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password:{
//         type: String,
//         required: false,
//     },
// })

// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

// export default User;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
