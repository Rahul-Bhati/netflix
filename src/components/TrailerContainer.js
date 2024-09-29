import React from 'react'
import { useSelector } from 'react-redux';
import TrailerTitles from './TrailerTitles';

const TrailerContainer = () => {
    const movie = useSelector(appStore => appStore.movie?.nowPlayingMovies);

    // console.log(movie[0])
    if (movie) {
        return (
            <>
                <div className='w-full h-[400px]'>
                    {/* <video className='w-screen h-[400px]' autoPlay muted loop>
                        <source src="https://www.youtube.com/watch?v=cT4CCK3lxiI" />
                    </video> */}
                    <iframe className='w-screen aspect-video' src="https://www.youtube.com/embed/cT4CCK3lxiI?si=vbkYn-hoNJJ8chcZ&autoplay=1&mute=1" title="YouTube video player" ></iframe>
                </div>
                <TrailerTitles data={movie[0]} />
            </>
        );
    }
    return null;
}

export default TrailerContainer