"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Logo from "../widgets/Logo";
import UserImageWidget from "../widgets/UserImageWidget";
import SearchBar from "../widgets/SearchBar";

const Navbar = () => {
    const { status } = useSession();

    return (
        <div className="bg-slate-50 dark:bg-slate-950 fixed top-0 left-0 right-0 h-16 py-2 px-4 z-10 flex justify-between items-center">
            <Logo />
            <div className="flex gap-x-4 items-center">
                {status === "authenticated" ? (
                    <>
                        <SearchBar />
                        <UserImageWidget />
                        <button
                            className="button__default"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button
                        className="button__default"
                        onClick={() => signIn("google")}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
