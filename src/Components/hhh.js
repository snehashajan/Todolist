import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
import {Addtodo} from "./Components/Addtodo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {About} from "./Components/About";

function App() {
let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo)=>{
    setTodos(todos.filter((e)=>{
       return e!== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) =>{
    let sno=0;
          if(todos.length === 0){
            sno++;
          }
          else{
           sno = todos[todos.length-1].sno+1;
          }
          const myTodo ={
            sno:sno,
            title: title,
            desc:desc,
          };
          setTodos([...todos, myTodo]);
  };

const[todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function Home() {
    return (
      <>
        <Addtodo addtodo={addtodo} />
        <Todos todos={todos} ondelete={ondelete} />
      </>
    );
  }

  return (
    //<>
    //<Router>
    //<Header />
    //<Routes>
          //<Route exact path="/" render={()=>{
            //return(
            //<>
            //<Addtodo addtodo= {addtodo}/>
            //<Todos todos = {todos} ondelete ={ondelete}/>
            //</>)
          //}}>
          //</Route>
          //<Route exact path="/about"> <About />
          //</Route>
          
        //</Routes>
    
    //<Footer/>
    //</Router>
//</>
    <>
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
