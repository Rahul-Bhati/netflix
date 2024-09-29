import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "./firebase"

export const verifyEmailAndPassword = ({ email, password }) => {
    const verifyEmail = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email)
    const verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!verifyEmail) {
        return 'Invalid email'
    }

    if (!verifyPassword) {
        return 'Invalid password'
    }

    return null;
}

export const signIn = async (email, password) => {
    try {
        const sign = await signInWithEmailAndPassword(auth, email, password);

        const user = sign.user;

        // const serializableUser = {  // redux show error for serializable object that's why we need to create a serializable object
        //     uid: user.uid,
        //     email: user.email,
        //     displayName: user.displayName,
        //     img: user.photoURL
        // };

        return user;
    } catch (error) {
        return { error: error.message, code: error.code, msg: "user not find for this email" };
    }
};

export const signUp = async (name, email, password) => {
    try {
        const create = await createUserWithEmailAndPassword(auth, email, password);
        const user = create.user;

        // const serializableUser = {  // redux show error for serializable object that's why we need to create a serializable object
        //     uid: user.uid,
        //     email: user.email,
        //     displayName: name,
        //     img: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        //     // Add other serializable properties as needed
        // };



        if (user.displayName === null) {
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            });

            return user;
        }
    } catch (error) {
        return { error: error.message, code: error.code, msg: "user not created" };
    }

}