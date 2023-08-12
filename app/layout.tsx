import Navbar from "@/components/previews/Navbar";
import "./globals.css";

import { ReactNode } from "react";
import GeneralContainer from "@/components/generals/GeneralContainer";
import ThemeContainer from "@/components/generals/ThemeContainer";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-slate-200 dark:bg-slate-800">
                <GeneralContainer>
                    <ThemeContainer>
                        <Navbar />
                        <div className="mt-20 w-full max-w-screen-lg mx-auto">
                            {children}
                        </div>
                    </ThemeContainer>
                </GeneralContainer>
            </body>
        </html>
    );
};

export default RootLayout;
