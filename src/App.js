import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./features/todoList/TodoList";
import Modals from "./features/modals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Modals/>
          <TodoList />
      </header>
    </div>
  );
}

export default App;
