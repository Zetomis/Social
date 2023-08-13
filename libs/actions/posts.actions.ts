"use server";

import { MAX_POSTS_PER_PAGE } from "@/constants";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (currentPage: number) => {
    const posts = await prisma.post.findMany({
        skip: (currentPage || 0) * MAX_POSTS_PER_PAGE,
        take: MAX_POSTS_PER_PAGE,
        orderBy: { createdAt: "desc" },
    });

    return posts;
};

export const getPostAmount = async () => {
    const totalPosts = await prisma.post.count();
    return totalPosts;
};
