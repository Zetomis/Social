"use client";

import { changeTheme } from "@/state/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToogle = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    console.log(theme);

    switch (theme) {
        case "light":
            return (
                <button
                    className="button__default w-16"
                    onClick={() => dispatch(changeTheme())}
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            );
        case "dark":
            return (
                <button
                    className="button__default w-16"
                    onClick={() => dispatch(changeTheme())}
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
            );
    }
};

export default ThemeToogle;
