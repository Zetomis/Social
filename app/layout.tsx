import Navbar from "@/components/previews/Navbar";
import "./globals.css";

import { ReactNode } from "react";
import GeneralContainer from "@/components/generals/GeneralContainer";
import ThemeContainer from "@/components/generals/themeContainer";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <GeneralContainer>
                    <ThemeContainer>
                        <Navbar />
                        {children}
                    </ThemeContainer>
                </GeneralContainer>
            </body>
        </html>
    );
};

export default RootLayout;
