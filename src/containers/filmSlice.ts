import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseArray, ResponseObj } from "../types";

interface Name {
    value: ResponseObj[]
    isLoading: boolean;
}


const initialState: Name= {
    value: [],
    isLoading: false,
};

const URL = 'http://api.tvmaze.com/search/shows?q='

export const fetchFilms = createAsyncThunk<ResponseArray[], string>('film/fetchAll', async (arg) => {
    const array = await axios.get(URL + arg)
    return array.data
})


export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.value = []
            action.payload.map((film) => {
                state.value.push ({
                    name: film.show.name,
                    id: film.show.id,
                })
            })
        })
    }
});

export const filmRedusers = filmSlice.reducer;