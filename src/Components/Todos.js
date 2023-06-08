import React from 'react'
import {Todositem} from "./Todositem"

export const Todos = (props) => {
  let mystyle = {
    minHeight :"70vh",
    margin: "40px auto"
  }
  return (
    <div className = "container " style = {mystyle}>
        <h3 className = "my-3">Todo List</h3>
        {props.todos.length ===0 ? "No Todos to Display" :
        props.todos.map((todo) =>{
            return (<Todositem todo = {todo} key= {todo.sno} ondelete={props.ondelete}/> 
          
            )
          })}

    </div>
  )
}

export default Todos
