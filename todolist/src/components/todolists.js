import React, { useState } from "react";
import "./style/todolist.css";

function TodoList({ todos, deletelist, editlist }) {
    const [checkedItems, setCheckedItems] = useState([]);
    const [highlightedTodos, setHighlightedTodos] = useState([]);

    function checkbuttonclicked(todo) {
        const index = checkedItems.indexOf(todo);
        const newCheckedItems = [...checkedItems];
        if (index === -1) {
            newCheckedItems.push(todo);
        } else {
            newCheckedItems.splice(index, 1);
        }
        setCheckedItems(newCheckedItems);
    }

    function highlightItem(todo) {
        const index = highlightedTodos.indexOf(todo);
        const newHighlightedTodos = [...highlightedTodos];
        if (index === -1) {
            newHighlightedTodos.push(todo);
        } else {
            newHighlightedTodos.splice(index, 1);
        }
        setHighlightedTodos(newHighlightedTodos);
    }

    return (
        <>
            <div className="container">
                <ul className="container_ul">
                    {todos.map((todo, index) => (
                        <React.Fragment key={index}>
                            <li
                                className={`container_li ${checkedItems.includes(todo) ? "checked" : ""
                                    } ${highlightedTodos.includes(todo) ? "highlighted" : ""
                                    }`}
                            >
                                {todo}
                            </li>
                            <button onClick={() => editlist(index)} className="Edit">
                                Edit
                            </button>
                            <button onClick={() => deletelist(index)} className="Close">
                                Delete
                            </button>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    checkbuttonclicked(todo);
                                    highlightItem(todo)
                                }}
                                checked={checkedItems.includes(todo)}
                            />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
