import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, selectTodos } from "./features/toDoSlice";
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText) {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="allItems">
     <h2 className = 'ListName'>To-Do List</h2>
      <div className="InputValues">
        <input type="text" className="inputSpace" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button disabled={inputText.length === 0}className="addItem" onClick={handleAddTodo} >Add Task</button>
      </div>
      <div className="AddedValues">
       <ul className="lists">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" className = "checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" , color: todo.completed ? "gray ": "black"}} className="Tasks">
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)} className="DeleteItem">Delete</button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

