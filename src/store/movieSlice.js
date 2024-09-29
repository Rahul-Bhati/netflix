import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
    name: "movie",
    initialState: {
        movieTrailer: null,
        nowPlayingMovies: null
    },
    reducers: {
        setMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const { setMovieTrailer, setNowPlayingMovies } = movie.actions;

export default movie.reducer;