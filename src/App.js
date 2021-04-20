import { useState } from "react";
import "./App.css";
import ShoppingList from "./ShoppingList";

const LIST = [];

function App() {
  const [listItem, setListItem] = useState("");

  const addItem = () => {
    LIST.push(listItem);
    setListItem("");
    console.log(LIST);
  };

  return (
    <div className="App">
      <input
        type="text"
        name="item"
        id="item"
        value={listItem}
        onKeyUp={(e) => {
          if (e.key === "Enter") addItem(e);
        }}
        onChange={(e) => setListItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ShoppingList list={LIST} />
    </div>
  );
}

export default App;
