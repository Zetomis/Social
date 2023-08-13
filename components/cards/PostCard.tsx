import { Post } from "@prisma/client";
import UserAndTimeWidget from "../widgets/UserAndTimeWidget";

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="my-6">
            <UserAndTimeWidget
                userId={post.userId}
                createdAt={post.createdAt}
            />
            <div className="flex">
                <p className="block ml-12 mt-2">{post.content}</p>
            </div>
        </div>
    );
};

export default PostCard;
