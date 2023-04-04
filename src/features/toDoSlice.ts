import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "./types";

const initialState: TodoState = {
  todoList: [], 
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todoList.push(newTodoItem); 
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload);
      state.todoList[index].completed = !state.todoList[index].completed; 
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload); 
      state.todoList.splice(index, 1); 
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state: { todos: TodoState }) => state.todos.todoList; 

