import React, { Fragment, useContext, useState } from "react";
import { TodosContext } from '../store/todo-context';

import ErrorModal from './ErrorModal';

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  const [todo, setTodo] = useState<string>("");
  const [todoDescrip, setTodoDescrip] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo.trim().length === 0 || todoDescrip.trim().length === 0) {
     setError("Fields 'Add New Todo' and 'Todo Description' must be non empty fields!");
      return;
    }

    todoCtx.addNewTodoItem(todo, todoDescrip);
    setTodo("");
    setTodoDescrip("");
  };

  const onEnterTodoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const onEnterTodoDescripHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDescrip(event.target.value);
  };

  const errorConfrimHandler = () => {
    setError("");
  };

  return (
    <Fragment>
    {error && <ErrorModal errorConfirm={errorConfrimHandler} title={"Invalid input"} message={error}/>}
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Add New Todo</label>
      <input id="text" type="text" value={todo} onChange={onEnterTodoHandler} />
      <label htmlFor="descr">Todo Description</label>
      <input
        id="descr"
        type="text"
        value={todoDescrip}
        onChange={onEnterTodoDescripHandler}
      />
      <button> Add Todo</button>
    </form>
    </Fragment>
  );
};

export default NewTodo;
