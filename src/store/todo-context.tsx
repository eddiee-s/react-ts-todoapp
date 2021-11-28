import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    todoItem: Todo[],
    addNewTodoItem : (todoText:string, todoDescription:string) => void,
    removeTodoItem: (id:string) => void,
};

export const TodosContext = React.createContext<TodosContextObj> ({
    todoItem: [],
    addNewTodoItem : () => {},
    removeTodoItem: (id:string) => {},
});

const TodosContextProvider:React.FC = (props) => {
    const [newTodo, setNewTodo] = useState<Todo[]>([]);

  const addNewTodoHandler = (todo: string, todoDescr: string) => {

    const NewTodos = new Todo(todo, todoDescr);
    setNewTodo((prevTodos) => {
      return prevTodos.concat(NewTodos) });
  };

  const removeTodoHandler = (id: string) => {
    setNewTodo((prevTodos)=> {
      return prevTodos.filter((item) => item.id !== id );
    });
  };

  const contextValue : TodosContextObj = {
    todoItem: newTodo,
    addNewTodoItem: addNewTodoHandler,
    removeTodoItem: removeTodoHandler
  };
    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;