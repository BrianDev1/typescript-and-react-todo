import React from "react";

interface TodoListProps {
    items: {id: string, text:string}[];
    onClick: (id: string) => void;
}

function TodoList(props : TodoListProps)  {

    
    return(
        <ul>
            {props.items.map((todoItem) => 
            <li onClick={() => props.onClick(todoItem.id)} key={todoItem.id}>{todoItem.text}</li>
            )}
        </ul>
    );
};

export default TodoList;