import NewPostForm from "@/components/previews/NewPostForm";
import PostsDisplay from "@/components/previews/PostsDisplay";

const RootPage = () => {
    return (
        <div className="layout">
            <div className="container">
                <h1>Left</h1>
            </div>
            <div className="flex flex-col gap-y-4">
                <NewPostForm />
                <PostsDisplay />
            </div>
            <div className="container">
                <h1>Right</h1>
            </div>
        </div>
    );
};

export default RootPage;
