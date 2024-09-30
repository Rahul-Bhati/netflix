import { logo } from '../utils/constant'
// import appStore from '../store/store'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { removeUser, setUser } from '../store/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(appStore => appStore.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    img: user.photoURL
                }));
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });

        // this will unsubscribe the listener when the component unmounts
        // why we need to unsubscribe the listener?
        // because if we don't unsubscribe the listener, it will keep listening for the changes in the authentication state
        // and if the listener is not unsubscribed, it will keep listening for the changes in the authentication state
        return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
            <header className='fixed w-full bg-gradient-to-b from-black p-3 flex justify-between z-20 pl-20' >
                <img src={logo} alt='netflix logo' className='w-44 ' />
                {user &&
                    <div>
                        <img src={user.img} alt='profile' className='w-10 h-10 rounded-full' />
                        <button className='text-white ' onClick={handleSignOut} >logout</button>
                    </div>
                }
            </header>
        </>
    )
}

export default Header