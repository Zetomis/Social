"use client";

import { getMultiplePosts } from "@/state/features/postsSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { useEffect } from "react";

const PostsDisplay = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.posts);

    console.log(posts);

    useEffect(() => {
        dispatch(getMultiplePosts());
    }, []);

    return (
        <div className="container">
            <h1>ye</h1>
        </div>
    );
};

export default PostsDisplay;
