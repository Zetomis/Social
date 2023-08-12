import { createSlice } from "@reduxjs/toolkit";

const initialState: { theme: "light" | "dark" } = {
    theme: "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        getTheme: (state) => {
            const localTheme = localStorage.getItem("theme");

            if (localTheme) {
                state.theme = JSON.parse(localTheme) as "light" | "dark";
            } else {
                state.theme = "light";
            }
        },
        changeTheme: (state) => {
            switch (state.theme) {
                case "light":
                    state.theme = "dark";
                    localStorage.setItem("theme", "dark");
                    return;
                case "dark":
                    state.theme = "light";
                    localStorage.setItem("theme", "light");
                    return;
            }
        },
    },
});

export const { getTheme, changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
