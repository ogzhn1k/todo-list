import React,{useState} from 'react';
import {TodoListItem} from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos:Array<Todo>=[{text:"Do Shopping",complete:true},{text:"Wash the Dishes",complete:false}];

const App:React.FC=()=> {
  const [todos,setTodos]= useState(initialTodos);

  const toggleTodo:ToggleTodo=selectedTodo=>{
    const newTodos=todos.map(todo=>{
      if(todo===selectedTodo){
        return{
          ...todo,
          complete:!todo.complete,
        };
      }
      return todo; 
    });
    setTodos(newTodos);
  }

  const addTodo:AddTodo=newTodo=>{
    newTodo.trim()!==""&&setTodos([...todos,{text:newTodo,complete:false}]);
  }


  return (
    <div className="App">
      <React.Fragment>
         <TodoList todos={todos} toggleTodo={toggleTodo}/>
         <AddTodoForm addTodo={addTodo}/>
      </React.Fragment>
    </div>
  );
}

export default App;
