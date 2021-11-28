import { Fragment, useContext } from 'react';
import {TodosContext } from '../store/todo-context';

import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos:React.FC = () => {
    const todoCtx = useContext(TodosContext);
    return (
        <Fragment>
        <ul className={classes.todos}>
            { todoCtx.todoItem.map((item) =>(
                <TodoItem RemoveTodo={todoCtx.removeTodoItem.bind("null", item.id)} key={item.id} todoText={item.todo} todoDescr={item.todoDescr}/>))}
        </ul>
        {todoCtx.todoItem.length === 0 && <p className="info"> Todos List Empty.. Please enter data to add new Todo!</p>} 
        {todoCtx.todoItem.length > 0 && <p className="info"> To delete Todo click on todo from list</p>}
        </Fragment>
    );
};

export default Todos;