import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodo } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounterH2">Has completado {completedTodo} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };