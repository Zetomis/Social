"use client";

import { getMultiplePosts } from "@/state/features/postsSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { useEffect } from "react";

const PostsDisplay = () => {
    const posts = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMultiplePosts());
    }, []);

    if (posts.isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (!posts.posts) {
        return (
            <div>
                <h1>There is no post</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>ye</h1>
            {posts.posts.map((post) => (
                <h1>{post.content}</h1>
            ))}
        </div>
    );
};

export default PostsDisplay;
