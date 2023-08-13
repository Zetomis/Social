import useUser from "@/hooks/useUser";
import UserImageWidget from "./UserImageWidget";
import convertDateTime from "@/libs/functions/convertDateTime";
import Link from "next/link";
import { LONG_TEXT_LENGTH, MEDIUM_TEXT_LENGTH } from "@/constants";

const UserAndTimeWidget = ({
    userId,
    createdAt,
}: {
    userId: string;
    createdAt: Date;
}) => {
    const { user, isLoading } = useUser(userId);

    if (isLoading || !user) {
        return (
            <div className="flex gap-x-4 items-center">
                <div className="w-8 h-8 rounded-full loading" />
                <div className="flex flex-col justify-between">
                    <Link
                        href={"#"}
                        className="loading font-semibold block w-fit"
                    >
                        {MEDIUM_TEXT_LENGTH}
                    </Link>
                    <span className="loading text-sm block w-fit">
                        {LONG_TEXT_LENGTH}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-x-4 items-center">
            <UserImageWidget src={user.image} />
            <div className="flex flex-col justify-between">
                <Link
                    href={`/profile/${userId}`}
                    className="text font-semibold block"
                >
                    {user.name}
                </Link>
                <span className="text-sm text-slate-600 dark:text-slate-400 block">
                    {convertDateTime(createdAt)}
                </span>
            </div>
        </div>
    );
};

export default UserAndTimeWidget;
