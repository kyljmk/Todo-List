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
        <div className="form">
            <h3 className="form--title">Add to your list.</h3>
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
        </div>
    )
}

export default Form;