import { logo } from '../utils/constant'
import appStore from '../store/store'
import { useSelector } from 'react-redux';

const Header = () => {

    const user = useSelector(appStore => appStore.user);

    console.log(user)
    return (
        <>
            <header className='fixed w-full bg-gradient-to-b from-black p-3'>
                <img src={logo} alt='netflix logo' className='w-44 ' />
            </header>
        </>
    )
}

export default Header