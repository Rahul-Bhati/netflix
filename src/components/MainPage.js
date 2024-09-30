import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import TrailerContainer from './TrailerContainer';
import MovieListsContainer from './MovieListsContainer';

const MainPage = () => {


    useNowPlaying();
    return (
        <div className='bg-black'>
            <Header />

            <TrailerContainer />

            <MovieListsContainer />
        </div>
    )
}

export default MainPage