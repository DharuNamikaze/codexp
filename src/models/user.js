import { mongoose, Model, Schema, Document } from "mongoose";

const userSchema = new Schema({
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
        required: true,
    },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);


//typescript
//-->
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