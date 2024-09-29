import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import TrailerContainer from './TrailerContainer';
import MovieLists from './MovieLists';

const MainPage = () => {

    useNowPlaying();
    return (
        <>
            <Header />
            <div>
                <TrailerContainer />
                <div>

                </div>
            </div>
            <MovieLists />
        </>
    )
}

export default MainPage