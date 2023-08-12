import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setInput("");
    };

    return (
        <form
            className="flex items-center gap-x-1 bg-slate-200 dark:bg-slate-800"
            onSubmit={(event) => handleSubmit(event)}
        >
            <input
                type="text"
                placeholder="Search"
                className="input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button className="button__default">
                <FontAwesomeIcon icon={faSearch} className="text" />
            </button>
        </form>
    );
};

export default SearchBar;
