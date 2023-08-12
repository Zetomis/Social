"use client";

import { getTheme } from "@/state/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { ReactNode, useEffect } from "react";

const ThemeContainer = ({ children }: { children: ReactNode }) => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTheme());
    }, []);

    return <div className={theme}>{children}</div>;
};

export default ThemeContainer;
