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

    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
            <header className='fixed w-full bg-gradient-to-b from-black p-3 flex justify-between' >
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