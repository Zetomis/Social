import { getUser } from "@/libs/actions/user.actions";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const useUser = (userId: string) => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchUser = async () => {
        setIsLoading(true);

        const currentUser = await getUser(userId);
        if (currentUser && !(currentUser instanceof Error)) {
            console.log(currentUser);
            setUser(currentUser);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return { user, isLoading };
};

export default useUser;
