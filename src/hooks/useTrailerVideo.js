import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { base_url, options } from '../utils/constant';
import { setMovieTrailer } from '../store/movieSlice';

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMoviesTrailer = useCallback(async () => {
        const trailers = await fetch(`${base_url}/${movieId}/videos`, options);
        const trailerData = await trailers.json();

        const video = trailerData.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        const trailer = video.length ? video[0] : trailerData.results[0];

        dispatch(setMovieTrailer(trailer));
    }, [dispatch]);

    useEffect(() => {
        getMoviesTrailer();
    }, []);

}

export default useTrailerVideo;