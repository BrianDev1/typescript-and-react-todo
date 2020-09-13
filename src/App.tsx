import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";



function App() {

  const [todoList, addTodoItem] = useState<Todo[]>([]);


  function todoAddHandler(item: string) {
      
      addTodoItem(prevItems => [...prevItems, {id: Math.random().toString(), text: item}]);
  }

  //Add the delete functionality

  function deleteHandler(item: string) {
    addTodoItem((prevItems) => {
        console.log(item);
        return prevItems.filter((value) => value.id !== item);
    });
  }



  return (
    <div className="App">
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList onClick={deleteHandler} items={todoList} />
    </div>
  );
}

export default App;
