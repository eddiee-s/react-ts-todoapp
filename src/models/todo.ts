class Todo {
    id:string;
    todo:string;
    todoDescr:string;

    constructor(todoText:string, todoDescription:string) {
        this.id = new Date().toISOString();
        this.todo = todoText;
        this.todoDescr = todoDescription;
    }
}

export default Todo;