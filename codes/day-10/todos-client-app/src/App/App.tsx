import React from 'react';
import TodoList from '../components/todo-list/TodoList';
import { todos } from '../data/todos';
import './App.css';

function App() {
  return <TodoList todos={todos} />
}

export default App;
