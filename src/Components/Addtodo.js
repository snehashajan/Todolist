import React, {useState} from "react";

export const Addtodo = ({addtodo}) => {


  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");



  const submit= (event)=>{
     event.preventDefault();
     if(!title || !desc){
      alert("Tile or Description cannot be blank");
     }
     else{
         addtodo(title,desc);
     setTitle("");
     setDesc("");
  }
};

  return (
    <div className = "container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value = {title} onChange={(e)=>setTitle(e.target.value)}  id="title" />
    </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" value = {desc} onChange={(e)=> setDesc(e.target.value)} id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  );
};
