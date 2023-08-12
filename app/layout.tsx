import Navbar from "@/components/previews/Navbar";
import "./globals.css";

import { ReactNode } from "react";
import GeneralContainer from "@/components/generals/GeneralContainer";
import ThemeContainer from "@/components/generals/ThemeContainer";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <GeneralContainer>
                    <ThemeContainer>
                        <div className="bg-slate-200 dark:bg-slate-800 min-h-screen">
                            <Navbar />
                            <div className="mt-16 w-full max-w-screen-lg mx-auto py-4">
                                {children}
                            </div>
                        </div>
                    </ThemeContainer>
                </GeneralContainer>
            </body>
        </html>
    );
};

export default RootLayout;
