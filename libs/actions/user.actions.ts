"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    return user;
};

export const getUserPosts = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            posts: true,
        },
    });

    if (user) {
        return user.posts;
    }
};
