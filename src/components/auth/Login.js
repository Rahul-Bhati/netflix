import React, { useRef, useState } from 'react'
import { authentication } from '../../utils/authentication'
import Header from '../Header'
import { bg_imag } from '../../utils/constant'
import { auth } from '../../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlice'

const Login = () => {
    const [isSignin, setIsSignin] = useState(true);
    const [isError, setIsError] = useState(null);

    const dispatch = useDispatch();

    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null);

    const handleSignIn = (e) => {
        e.preventDefault()
        const msg = authentication({ email: email.current.value, password: password.current.value });
        setIsError(msg);

        if (msg === null) {
            if (isSignin) {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // redux show error for serializable object that's why we need to create a serializable object
                        const serializableUser = {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            img: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                            // Add other serializable properties as needed
                        };
                        dispatch(setUser(serializableUser));
                        console.log(user)
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            }
            else {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // redux show error for serializable object that's why we need to create a serializable object
                        const serializableUser = {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            img: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                            // Add other serializable properties as needed
                        };
                        dispatch(setUser(serializableUser));
                        console.log(user)
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            }

            console.log(email.current.value, password.current.value)
        }
        else console.log("isError", isError)

    }

    return (
        <div className='w-full h-screen'>
            <Header />
            <img src={bg_imag} alt='netflix logo' className='w-full h-full object-cover' />
            <div className='relative'>
                <div className='fixed top-0 left-0 right-0'>
                    <div className='flex justify-center items-center h-screen w-full bg-black bg-opacity-50'>
                        <div className='w-[350px] h-[400px] bg-black opacity-80 p-10 rounded-lg content-center'>
                            <h1 className='text-3xl font-bold text-white'>{isSignin ? "Sign In" : "Sign Up"}</h1>
                            <form className='flex flex-col'>
                                {!isSignin && <input type='text' ref={name} placeholder='Username' className='p-2 mt-5 rounded-md bg-gray-900 text-white' />}
                                <input type='email' ref={email} placeholder='Email' className='p-2 mt-5 rounded-md bg-gray-900 text-white' />
                                <p className="text-red-500 text-sm">{isError}</p>
                                <input type='password' ref={password} placeholder='Password' className='p-2 mt-5 rounded-md bg-gray-900 text-white' autoComplete="" />
                                <button className='bg-red-600 text-white p-2 mt-5 rounded-md' onClick={handleSignIn}>Sign In</button>
                            </form>
                            <p className='text-white mt-5'>
                                {isSignin ? (
                                    <>New to Netflix? <button className='text-red-600 cursor-pointer' onClick={() => setIsSignin(false)}>Sign up now.</button></>
                                ) : (
                                    <>Already a member? <button className='text-red-600 cursor-pointer' onClick={() => setIsSignin(true)}>Sign in now.</button></>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login