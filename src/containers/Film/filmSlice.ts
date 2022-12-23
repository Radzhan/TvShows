import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseArray, ResponseObj, ResponseOne, ResponseOneObj } from "../../types";

interface Name {
    value: ResponseObj[];
    object: ResponseOneObj;
};

const initialState: Name= {
    value: [],
    object: {
        name: '',
        image: '',
        summary: '',
        type: '',
        runtime: 0,
    },
};

export const fetchFilms = createAsyncThunk<ResponseArray[], string>('film/fetchAll', async (arg) => {
    const array = await axios.get('http://api.tvmaze.com/search/shows?q=' + arg);
    return array.data;
});

export const fetchOneFilm = createAsyncThunk<ResponseOne, number>('film/fetchOne', async (arg) => {
    const fetchOne = await axios.get('https://api.tvmaze.com/shows/' + arg);
    return fetchOne.data;
});

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
                });
            });
        });

        builder.addCase(fetchOneFilm.fulfilled, (state, action) => {
            state.object.image = action.payload.image.medium
            state.object.name = action.payload.name
            state.object.summary = action.payload.summary
            state.object.runtime = action.payload.runtime
            state.object.type = action.payload.type
        });
    }
});

export const filmRedusers = filmSlice.reducer;