import { Fragment } from "react";
import classes from "./ErrorModal.module.css";

const ErrorModal: React.FC <{errorConfirm: ()=> void, title: string, message: string}> = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}  onClick={props.errorConfirm}/>
      <div className={`${classes.modal} ${classes.card}`}>
        <header className={classes.header}>
          <h2> {props.title} </h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
    
        </div>
        <footer className={classes.actions}>
          <button onClick={props.errorConfirm}> Confirm </button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
