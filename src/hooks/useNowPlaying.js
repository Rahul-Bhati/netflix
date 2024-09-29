import { useDispatch, useSelector } from "react-redux";
import { base_url, options } from "../utils/constant";
import { setMovieTrailer, setNowPlayingMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const movie = useSelector(appStore => appStore.movie);

    console.log(movie)

    async function getMovies() {
        const response = await fetch(`${base_url}/now_playing?page=1`, options);
        const data = await response.json();
        // console.log(data);

        dispatch(setNowPlayingMovies(data.results));

        const trailer = await fetch(`${base_url}/${data.results[0].id}/videos`, options);
        const trailerData = await trailer.json();
        console.log(trailerData);

        const video = trailerData.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        dispatch(setMovieTrailer(video));
    }

    useEffect(() => {
        if (!movie.nowPlayingMovies) getMovies();
    }, []);

}

export default useNowPlaying;