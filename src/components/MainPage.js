import React from 'react'
import { bg_imag } from '../utils/constant'
import Login from './auth/Login'

const MainPage = () => {
    return (
        // <div className='w-full h-screen'>
        //     <img src={bg_imag} alt='netflix logo' className='object-cover' />
        //     <div className='relative'>
        //         <Login />
        //     </div>
        // </div>

        <div className='w-full h-screen'>
            <img src={bg_imag} alt='netflix logo' className='w-full h-full object-cover' />
            <div className='relative'>
                <Login />
            </div>
        </div>
    )
}

export default MainPage