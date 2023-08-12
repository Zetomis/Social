"use client";
import { useSession } from "next-auth/react";
import UserImageWidget from "../widgets/UserImageWidget";
import HorizonDivider from "../generals/HorizonDivider";

const NewPostForm = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return (
            <div className="flex flex-col container">
                <div className="flex gap-x-2">
                    <UserImageWidget src={session.user.image} />
                    <textarea
                        className="input flex-1 resize-none h-20"
                        placeholder="Write something about you..."
                    />
                </div>
                <HorizonDivider />
                <button className="button__default w-full">Post</button>
            </div>
        );
    }
};

export default NewPostForm;
