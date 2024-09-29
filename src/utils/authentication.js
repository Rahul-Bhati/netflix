import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "./firebase"
import { user_profile } from "./constant"

export const verifyEmailAndPassword = ({ email, password }) => {
    const verifyEmail = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email)
    const verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!verifyEmail) return 'Invalid email'

    if (!verifyPassword) return 'Invalid password'

    return null;
}

export const signIn = async (email, password) => {
    try {
        const sign = await signInWithEmailAndPassword(auth, email, password);
        return sign.user;
    } catch (error) {
        return { error: error.message, code: error.code, msg: "user not find for this email" };
    }
};

export const signUp = async (name, email, password) => {
    try {
        const create = await createUserWithEmailAndPassword(auth, email, password);
        const user = create.user;

        if (user.displayName === null) {
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: user_profile
            });

            return user;
        }
    } catch (error) {
        return { error: error.message, code: error.code, msg: "user not created" };
    }

}