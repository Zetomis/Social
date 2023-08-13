"use server";

import { MAX_POSTS_PER_PAGE } from "@/constants";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPosts = async (currentPage: number) => {
    console.log(currentPage);

    const posts = await prisma.post.findMany({
        skip: (currentPage || 0) * MAX_POSTS_PER_PAGE,
        take: MAX_POSTS_PER_PAGE,
    });

    return posts;
};
