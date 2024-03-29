import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            const currentUser = await prisma.user.findUnique({
                where: {
                    email: session.user.email,
                },
            });

            if (currentUser) {
                session.user.id = currentUser.id;
                session.user.email = currentUser.email;
                session.user.name = currentUser.name;
                session.user.image = currentUser.image;
            }

            return session;
        },
        async signIn({ user }) {
            const currentUser = await prisma.user.findUnique({
                where: {
                    email: user.email ?? "",
                },
            });

            if (!currentUser) {
                await prisma.user.create({
                    data: {
                        email: user.email ?? "",
                        name: user.name ?? "",
                        image: user.image ?? "",
                    },
                });
            }

            return true;
        },
    },
    secret: process.env.SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);
export { handler as POST, handler as GET };
