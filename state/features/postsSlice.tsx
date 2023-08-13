import { getPosts } from "@/libs/actions/posts.actions";
import { Post } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialInterface {
    isLoading: boolean;
    posts: Post[];
    currentPage: number;
}

const initialState: initialInterface = {
    isLoading: false,
    posts: [],
    currentPage: 0,
};

export const getMultiplePosts = createAsyncThunk(
    "posts/getPostsId",
    async (_, { getState }) => {
        const state = getState() as { posts: initialInterface };
        const data = await getPosts(state.posts.currentPage);
        return data;
    }
);

export const getMorePosts = createAsyncThunk(
    "posts/getMorePosts",
    async (_, thunkAPI) => {}
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addNewPost: (state, action: PayloadAction<{ post: Post }>) => {
            state.posts.push(action.payload.post);
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getMultiplePosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMultiplePosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            }),
});

export const { addNewPost } = postsSlice.actions;
export default postsSlice.reducer;
