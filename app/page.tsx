import NewPostForm from "@/components/previews/NewPostForm";

const RootPage = () => {
    return (
        <div className="layout">
            <div className="container">
                <h1>Left</h1>
            </div>
            <NewPostForm />
            <div className="container">
                <h1>Right</h1>
            </div>
        </div>
    );
};

export default RootPage;
