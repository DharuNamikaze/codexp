import { User } from "@/models/user";
export async function createUser(user){
    try {
    const user = await User.create(user);
    } catch (e) {
        throw new Error(e)
    }
}