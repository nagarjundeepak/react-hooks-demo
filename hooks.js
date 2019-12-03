import React, { useState } from 'react';
import {render} from 'react-dom';
import './style.css';

function Todo({ todo, index, completeTodo, deleteTodo }){
  return(
    <div className='todo' style={{textDecoration: todo.isCompleted ? 'line-through':''}}>
    <span>{todo.text}</span>
    <div>      
      <label><input type="checkbox" onClick={()=> completeTodo(index)} /><span></span></label>
      
      <i className="icon material-icons" onClick={()=> deleteTodo(index)}>delete_forever</i>
    </div>
    </div>)  
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value){
      return;
    }
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' className='inputs todo' value={value} onChange={e => setValue(e.target.value)} placeholder='add todo'/>
    </form>
  )
}

function Apps(){
  const [todos, setTodos] = useState([
    {
      text: 'Learn Vue',
      isCompleted: false
    },
    {
      text: 'Learn JavaScript',
      isCompleted: false
    },
    {
      text: 'Learn React',
      isCompleted: false
    }
  ]);

  const completeTodo = index =>{
    const newTodos = [...todos];
    if(newTodos[index].isCompleted == false){
      newTodos[index].isCompleted = true;
    }
    else {
    newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  }
  const addTodo = text =>{
    const newTodos = [...todos, {text:text,isCompleted:false}];
    setTodos(newTodos);
  }

  const deleteTodo = index =>{
    const newTodos =[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return(
    <div className='app'>
      <div className='todoList'>
        {
          todos.map((todo,index) =>
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
          )
        }
      </div>
      <div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default Apps;
