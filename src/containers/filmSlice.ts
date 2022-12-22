import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
    isLoading: false,
};

export const fetchFilms = createAsyncThunk('film/fetchAll', async (arg, thunkApi) => {
})


export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
    },
});

export const filmRedusers = filmSlice.reducer;