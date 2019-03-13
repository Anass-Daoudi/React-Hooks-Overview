import React, { useState } from "react";

const Todos = () => {
    const [todoContent, setTodoContent] = useState("");
    const [isTodoCompleted, setTodoCompletionStatus] = useState(false);
    const [todos, setTodos] = useState([]);
    const [shownTodos, setShownTodos] = useState("all")

    const addTodo = () => {
        setTodos(prevTodos => [...prevTodos, { todoContent, isTodoCompleted }]);
    }

    return (
        <React.Fragment>
            Todos ({todos.length})
            <div>
                <input
                    type="text"
                    placeholder="Todo Content"
                    onChange={e => setTodoContent(e.target.value)}
                    value={todoContent}
                />
                <input
                    type="radio"
                    name="status"
                    onChange={() => setTodoCompletionStatus(true)}
                    checked={isTodoCompleted === true}
                /> Completed
                <input
                    type="radio"
                    name="status"
                    onChange={() => setTodoCompletionStatus(false)}
                    checked={isTodoCompleted === false}
                /> Uncompleted
                <button onClick={addTodo}>Add Todo</button>
                <div>
                    Show only
                    <input
                        type="radio"
                        name="shown-todos"
                        onChange={() => setShownTodos("all")}
                        checked={shownTodos === "all"}
                    /> All
                    <input
                        type="radio"
                        name="shown-todos"
                        onChange={() => setShownTodos("completed")}
                        checked={shownTodos === "completed"}

                    /> Completed
                    <input
                        type="radio"
                        name="shown-todos"
                        onChange={() => setShownTodos("uncompleted")}
                        checked={shownTodos === "uncompleted"}

                    /> Uncompleted
                </div>
                <ul>
                    {
                        todos
                            .filter(todo => (
                                shownTodos === "all"
                                || (shownTodos === "completed" && todo.isTodoCompleted === true)
                                || (shownTodos === "uncompleted" && todo.isTodoCompleted === false)
                            )).map((todo, index) =>
                                <li key={index}>
                                    Todo:<b>{todo.todoContent}</b>
                                    {" "}
                                    Completed:<b>{todo.isTodoCompleted ? "Yes" : "No"}</b>
                                </li>
                            )
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Todos;