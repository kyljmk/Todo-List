import "./App.css";
import Generator from "./Generator";
import Header from "./Header";
import Form from "./Form";
import Item from "./Item";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        title: "",
        completed: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  const [randomItem, setRandomItem] = useState("");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateRandomItem() {
    const randomIndex = getRandomInt(1, items.length);

    setRandomItem(items[randomIndex].title);
  }

  function addItem(name) {
    setItems([
      ...items,
      {
        id: nanoid(),
        title: name,
        completed: false,
      },
    ]);
  }

  function completeItem(id) {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function deleteCompleted() {
    const remainingItems = items.filter((item) => item.completed === false);
    setItems(remainingItems);
  }

  const itemList = items.map(
    (item) =>
      item.title &&
      !item.deleted && (
        <Item
          id={item.id}
          title={item.title}
          completed={item.completed}
          completeItem={completeItem}
        />
      )
  );

  return (
    <div className="app">
      <Header />
      <Generator
        randomItem={randomItem}
        generateRandomItem={generateRandomItem}
      />
      <div className="form--and--list">
        <Form addItem={addItem} />
        {itemList}
        {items.length > 1 && (
          <button onClick={deleteCompleted} className="app--button">
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
