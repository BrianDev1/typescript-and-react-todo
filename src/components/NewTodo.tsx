import React, {useRef} from "react";

interface itemProp {
    onAddTodo: (item: string) => void;
};


function NewTodo(props: itemProp) {

    //
    const textInputRef = useRef<HTMLInputElement>(null);
    
    function todoSubmitHandler(event:  React.FormEvent) {
            event.preventDefault();
        const enteredText = textInputRef.current!.value;
            props.onAddTodo(enteredText);
    }



    return(
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
       
    );
}

export default NewTodo;