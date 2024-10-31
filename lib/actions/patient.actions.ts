import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils"

export const createUser = async (user: CreateUserParams) => {
    console.log('user: ', user);
    try {
        console.log('test--- 1');

        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name,)
        console.log('newUser: ', newUser);
        return parseStringify(newUser);
    } catch (error: any) {
        if (error && error?.code === '409') {
            const existingUser = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUser;
        }
    }
}