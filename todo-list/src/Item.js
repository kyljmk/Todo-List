

function Item({ title, completeItem, id, completed }) {
    function handleClick() {
        completeItem(id)
    }

    return (
        <div className={!completed ? "todo--item" : "todo--item--completed"} >
            <h3 
                className={!completed ? "todo--item--title" : "todo--item--title--completed"}
            >{title}</h3>
            <button onClick={handleClick} className={!completed ? "todo--item--button" : "todo--item--button--completed"} >Done</button>
        </div>
    )
}

export default Item;