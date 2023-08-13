import NewPostForm from "@/components/previews/NewPostForm";
import PostsDisplay from "@/components/previews/PostsDisplay";

const RootPage = () => {
    return (
        <div className="layout">
            <div className="container">
                <h1>Left</h1>
            </div>
            <div>
                <NewPostForm />
                <h6>Some thing here...</h6>
                <PostsDisplay />
            </div>
            <div className="container">
                <h1>Right</h1>
            </div>
        </div>
    );
};

export default RootPage;
