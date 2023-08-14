"use client";

import PostCard from "@/components/cards/PostCard";
import useUser from "@/hooks/useUser";
import { getUserPosts } from "@/libs/actions/user.actions";
import { Post } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
    const { user, isLoading } = useUser(params.userId);
    const [userPosts, setUserPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchUserPosts = async () => {
            const data = await getUserPosts(params.userId);
            if (data && !(data instanceof Error)) {
                setUserPosts(data);
            }
        };

        if (user) {
            fetchUserPosts();
        }
    }, [user]);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <h1>User not found</h1>
            </div>
        );
    }

    return (
        <div className="grid justify-items-center">
            <div className="rounded-full overflow-hidden flex items-center justify-center aspect-square w-fit h-fit">
                <Image src={user.image ?? ""} alt="" width={160} height={160} />
            </div>
            <h1 className="mt-8">{user.name}</h1>
            <div>
                <h4 className="text-left mt-4">User Posts:</h4>
                {userPosts &&
                    userPosts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))}
            </div>
        </div>
    );
};

export default ProfilePage;
