"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";

const prisma = new PrismaClient();

export const newPost = async (content: string) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Error("Something went wrong.");
    }

    const post = await prisma.post.create({
        data: {
            userId: session.user.id,
            content: content,
        },
    });

    return post;
};
