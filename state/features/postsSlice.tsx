import { getPostAmount, getPosts } from "@/libs/actions/posts.actions";
import { Post } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface initialInterface {
    isLoading: boolean;
    posts: Post[];
    currentPage: number;
    totalPosts: number;
}

const initialState: initialInterface = {
    isLoading: false,
    posts: [],
    currentPage: 0,
    totalPosts: 0,
};

export const getMultiplePosts = createAsyncThunk(
    "posts/getPostsId",
    async (_, { getState }) => {
        const state = getState() as { posts: initialInterface };
        const data = await getPosts(state.posts.currentPage);
        return data;
    }
);

export const getTotalPosts = createAsyncThunk(
    "posts/getTotalPosts",
    async () => {
        const data = await getPostAmount();
        return data;
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addNewPost: (state, action: PayloadAction<{ post: Post }>) => {
            state.posts.unshift(action.payload.post);
            state.totalPosts += 1;
        },
        increasePageAmount: (state) => {
            state.currentPage += 1;
        },
        updatePosts: (state, action: PayloadAction<{ newPosts: Post[] }>) => {
            state.posts = [...action.payload.newPosts];
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
            })
            .addCase(getTotalPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTotalPosts.fulfilled, (state, action) => {
                state.totalPosts = action.payload;
                state.isLoading = false;
            }),
});

export const { addNewPost, increasePageAmount, updatePosts } =
    postsSlice.actions;
export default postsSlice.reducer;
