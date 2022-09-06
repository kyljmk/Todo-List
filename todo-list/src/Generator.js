

function Generator({ randomItem, generateRandomItem }) {
    function handleClick() {
        generateRandomItem()
        
        if(randomItem === "") {
            generateRandomItem()
        }
    }

    return (
        <div className="generator">
            <h2 className="generator--title">Unsure where to begin? Pick a task from your To-Do List at random!</h2>
            <h3 className="generator--task">{randomItem}</h3>
            <button 
                className="generator--button"
                onClick={handleClick} 
            >
                Random To Do Task
            </button>
        </div>
    )
}

export default Generator;