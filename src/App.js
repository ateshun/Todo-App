import "./App.css";
import React from "react";
import icon from "./Resources/icon-moon.svg";
import Body from "./Component/Body";
import Top from "./Component/Top";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput("");
  };

  const [todoList, setTodoList] = useState([]);

  const addTodo = (userInput) => {
    const newTodo = {
      id: Date.now(),
      text: userInput,
      status: false,
    };

    setTodoList((prevData) => [newTodo, ...todoList]);
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="section1">
          <p>TODO</p>
          <img src={icon} alt="" height="25px" width="25px" />
        </div>
        <form className="btn" onSubmit={handleSubmit} addHandler={addTodo}>
          <input
            placeholder="Create new ToDo Item"
            name="Body"
            type="text"
            value={userInput}
            onChange={handleChange}
          />
          <button type="submit" className="add">
            ADD
          </button>
        </form>
      </div>
      <div className="container">
        <Top />
        <hr />
        <Body />
        <hr />
        {/* <Body />
        <hr />
        <Body />
        <hr />
        <Body />
        <hr /> */}
        <div className="last">
          <p>5 Items</p>
          <button type="button">Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
