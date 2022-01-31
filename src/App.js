import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="todo">
        <Form todoList={todoList} setTodoList={setTodoList} />
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
