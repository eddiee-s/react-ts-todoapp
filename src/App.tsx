import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todo-context";


import "./App.css";


function App() {
  
  return (
    <div className="App">
      <TodosContextProvider >
      <NewTodo />
      <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
