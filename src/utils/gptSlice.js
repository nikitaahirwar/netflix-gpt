import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGpt: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {toggleGpt} = gptSlice.actions;
export default gptSlice.reducer;