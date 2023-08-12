"use client";

import { useAppSelector } from "@/state/hooks";
import { ReactNode } from "react";

const ThemeContainer = ({ children }: { children: ReactNode }) => {
    const theme = useAppSelector((state) => state.theme.theme);

    return <div className={theme}>{children}</div>;
};

export default ThemeContainer;
