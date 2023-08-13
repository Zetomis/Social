"use client";

import { getMultiplePosts, getTotalPosts } from "@/state/features/postsSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { useEffect } from "react";
import PostCard from "../cards/PostCard";
import NextPageButton from "./NextPageButton";

const PostsDisplay = () => {
    const posts = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMultiplePosts());
        dispatch(getTotalPosts());
    }, []);

    if (posts.isLoading) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (!posts.posts) {
        return (
            <div className="container">
                <h1>There is no post</h1>
            </div>
        );
    }

    return (
        <div className="container grid">
            {posts.posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
            <NextPageButton />
        </div>
    );
};

export default PostsDisplay;
