import React, { useRef, useState } from 'react'
import { verifyEmailAndPassword, signIn, signUp } from '../../utils/authentication'
import Header from '../Header'
import { bg_imag } from '../../utils/constant'

const Login = () => {
    const [isSignin, setIsSignin] = useState(true);
    const [isError, setIsError] = useState(null);

    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null);

    const handleSignIn = async (e) => {
        e.preventDefault()
        const msg = verifyEmailAndPassword({ email: email.current.value, password: password.current.value });
        setIsError(msg);

        if (msg) return;

        if (isSignin) {
            const user = await signIn(email.current.value, password.current.value);
            if (user.error) {
                setIsError(user.msg);
                return;
            }
        }
        else {
            if (name.current.value === "") {
                setIsError("Name is required");
                return;
            }
            const user = await signUp(name.current.value, email.current.value, password.current.value);
            if (user.error) {
                setIsError(user.msg);
                return;
            }
        }
    }

    const handleStateOfSignIn = () => {
        setIsError(null);
        setIsSignin(!isSignin);
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
                                <button className='bg-red-600 text-white p-2 mt-5 rounded-md' onClick={handleSignIn}>
                                    {isSignin ? "Sign In" : "Sign Up"}
                                </button>
                            </form>
                            <p className='text-white mt-5'>
                                {isSignin ? (
                                    <>New to Netflix? <button className='text-red-600 cursor-pointer' onClick={handleStateOfSignIn}>Sign up now.</button></>
                                ) : (
                                    <>Already a member? <button className='text-red-600 cursor-pointer' onClick={handleStateOfSignIn}>Sign in now.</button></>
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