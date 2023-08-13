"use client";

import { MAX_POSTS_PER_PAGE } from "@/constants";
import { getPosts } from "@/libs/actions/posts.actions";
import {
    getTotalPosts,
    increasePageAmount,
    updatePosts,
} from "@/state/features/postsSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";

const NextPageButton = () => {
    const posts = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();

    if (posts.isLoading || !posts) {
        return null;
    }

    if (posts.totalPosts <= posts.currentPage * MAX_POSTS_PER_PAGE) {
        return null;
    }

    return (
        <button
            className="button__default justify-self-center mt-6"
            disabled={posts.isLoading}
            onClick={async () => {
                await dispatch(getTotalPosts());
                await dispatch(increasePageAmount());

                const morePosts = await getPosts(posts.currentPage);
                if (morePosts && !(morePosts instanceof Error)) {
                    const newPosts = [...posts.posts];
                    morePosts.forEach((post) => newPosts.push(post));
                    dispatch(updatePosts({ newPosts }));
                }
            }}
        >
            Load More
        </button>
    );
};

export default NextPageButton;
