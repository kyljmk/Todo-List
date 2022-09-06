import { useState } from "react";

function Form({ addItem }) {
    const [title, setTitle] = useState("");

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addItem(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="form--input"
                type="text"
                placeholder="What to do?"
                name="item"
                value={title}
                onChange={handleChange}
                autoComplete="off"
            />
            <button 
                type="submit"
                className="form--button"
            >Add Task</button>
        </form>
    )
}

export default Form;