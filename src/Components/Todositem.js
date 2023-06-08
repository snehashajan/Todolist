import React from 'react'

export const Todositem = ({todo, ondelete}) => {
  return (
    <div>
      <>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className = "btn btn-sm btn-danger" onClick= {() =>{ondelete(todo)}}>Delete</button>
        <hr/>
        </>
    </div>
  );
};
