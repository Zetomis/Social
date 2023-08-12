"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { MEDIUM_TEXT_LENGTH } from "@/constants";
import UserImageWidget from "./UserImageWidget";

const UserImageAndNameWidget = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <Link
                href={`/profile/${session.user.id}`}
                className="button flex items-center gap-x-2 "
            >
                <h6>{session.user.name}</h6>
                <UserImageWidget src={session.user.image} />
            </Link>
        );
    }

    return (
        <div className="button flex items-center gap-x-2">
            <h6 className="loading">{MEDIUM_TEXT_LENGTH}</h6>
            <div className="w-8 h-8 rounded-full loading" />
        </div>
    );
};

export default UserImageAndNameWidget;
