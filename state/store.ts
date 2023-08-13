import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import postsSlice from "./features/postsSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        posts: postsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
