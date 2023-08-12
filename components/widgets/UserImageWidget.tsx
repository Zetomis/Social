import Image from "next/image";

const UserImageWidget = ({ src }: { src: string }) => {
    return (
        <div className="h-fit w-fit aspect-square overflow-hidden rounded-full flex justify-center items-center border border-slate-950 dark:border-slate-50">
            <Image src={src} alt="" height={32} width={32} />
        </div>
    );
};

export default UserImageWidget;
