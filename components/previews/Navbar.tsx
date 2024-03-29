"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "../widgets/Logo";
import UserImageAndNameWidget from "../widgets/UserImageAndNameWidget";
import SearchBar from "../widgets/SearchBar";
import ThemeToogle from "../widgets/ThemeToogle";

const Navbar = () => {
    const { status } = useSession();

    return (
        <div className="bg-slate-50 dark:bg-slate-950 fixed top-0 left-0 right-0 h-16 py-2 px-4 z-10 flex justify-between items-center">
            <Logo />
            <div className="flex gap-x-4 items-center">
                {status === "authenticated" ? (
                    <>
                        <SearchBar />
                        <UserImageAndNameWidget />
                        <ThemeToogle />
                        <button
                            className="button__default"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <ThemeToogle />
                        <button
                            className="button__default"
                            onClick={() => signIn("google")}
                        >
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
