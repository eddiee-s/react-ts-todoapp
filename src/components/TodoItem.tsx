import classes from './TodoItem.module.css';

const TodoItem:React.FC<{todoText:string, RemoveTodo: () => void}> = (props) => {
    return (
        <li className={classes.item} key={props.todoText} onClick={props.RemoveTodo}> {props.todoText} </li>
    );
}

export default TodoItem;