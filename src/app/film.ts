import { configureStore } from "@reduxjs/toolkit";
import { filmRedusers } from "../containers/filmSlice";

export const film = configureStore({
  reducer: {
    film: filmRedusers,
  },

});

export type RootState = ReturnType<typeof film.getState>;
export type AppDispatch = typeof film.dispatch;