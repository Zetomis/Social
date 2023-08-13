"use client";
import { useSession } from "next-auth/react";
import UserImageWidget from "../widgets/UserImageWidget";
import HorizonDivider from "../generals/HorizonDivider";
import { FormEvent, useState } from "react";
import { newPost } from "@/libs/actions/post.actions";
import { useAppDispatch } from "@/state/hooks";
import { addNewPost } from "@/state/features/postsSlice";

const NewPostForm = () => {
    const { data: session, status } = useSession();
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const post = await newPost(content);
            if (post && !(post instanceof Error)) {
                dispatch(addNewPost({ post: post }));
            }
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
        setContent("");
    };

    if (status === "authenticated") {
        return (
            <form
                className="flex flex-col container"
                onSubmit={(event) => handleSubmit(event)}
            >
                <div className="flex gap-x-4">
                    <UserImageWidget src={session.user.image} />
                    <textarea
                        className="input flex-1 resize-none h-20"
                        placeholder="Write something about you..."
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>
                <HorizonDivider />
                <button className="button__default w-full" disabled={isLoading}>
                    Post
                </button>
            </form>
        );
    }
};

export default NewPostForm;
