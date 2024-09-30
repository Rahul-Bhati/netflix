import React from 'react'
import { useSelector } from 'react-redux';
import MovieLists from './MovieLists';

const MovieListsContainer = () => {
    const nowPlaying = useSelector(appStore => appStore.movie?.nowPlayingMovies);

    // console.log(now)
    return (
        <div>
            {nowPlaying && <MovieLists title={"Now Playing"} data={nowPlaying} />}
        </div>
    )
}

export default MovieListsContainer