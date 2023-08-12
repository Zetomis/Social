"use client";

import { store } from "@/state/store";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const GeneralContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <SessionProvider>
                <Provider store={store}>{children}</Provider>
            </SessionProvider>
        </div>
    );
};

export default GeneralContainer;
