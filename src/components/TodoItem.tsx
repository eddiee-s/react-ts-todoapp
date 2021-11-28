import classes from './TodoItem.module.css';

const TodoItem:React.FC<{todoText:string, todoDescr:string,RemoveTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} key={props.todoText} onClick={props.RemoveTodo}> <b>{props.todoText}</b> -- {props.todoDescr} </li>
    );
}

export default TodoItem;