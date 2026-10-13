import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        upcomingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovie: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovies = action.payload;
        },
    }
})

export const {addNowPlayingMovie, addTrailerVideo, addPopularMovie, addUpcomingMovie, addTopRatedMovie} = moviesSlice.actions;
export default moviesSlice.reducer;