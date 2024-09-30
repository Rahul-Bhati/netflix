import { useDispatch, useSelector } from "react-redux";
import { base_url, options } from "../utils/constant";
import { setNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const movie = useSelector(appStore => appStore.movie.nowPlayingMovies);

    async function getMovies() {
        const response = await fetch(`${base_url}/now_playing?page=1`, options);
        const data = await response.json();
        dispatch(setNowPlayingMovies(data.results));
    }

    useEffect(() => {
        if (!movie) getMovies();
    }, []);

}

export default useNowPlaying;