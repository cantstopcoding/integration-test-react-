import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTask = () => {
    if (todo !== "") {
      const taskDetails = {
        value: todo,
      };

      setTodoList([...todoList, taskDetails]);
      setTodo("");
    }
  };

  return (
    <div>
      <div className="todo">
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => handleChange(e)}
          placeholder="Add todo here..."
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
        <br />

        {todoList !== [] ? (
          <ul>
            {todoList.map((t, key) => (
              <li key={key} className="listitem">
                {t.value}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default App;
