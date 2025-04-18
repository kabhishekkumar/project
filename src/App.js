import logo from './logo.svg';
import './App.css';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function App() {
let [todolist, setTodolist] = useState([]);

  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
    let finalDolist= [...todolist,toname]
    setTodolist(finalDolist) 
    }
    else{
      alert("This work is already exist in your today list");
    }

    event.preventDefault();
  }

  let list = todolist.map((value,index)=>{
     return(
      <ToDoListItems value= {value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} />
     )
  })

  return (
    <div className="App">
     <h1>To Do List</h1>

     <form onSubmit={saveToDoList}>
      <input type='text' name='toname' placeholder='enter your today work' /> <button >save</button>
     </form>
     
     <div className='outerDiv' >
     <ul>
     {list}
     </ul>
     </div> 
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber, todolist, setTodolist}){

  let [status, setStatus]= useState(false)

  let deleteRow=()=>{
   let finalDolist= todolist.filter((v,i)=>i!=indexNumber)
   setTodolist(finalDolist)
  }

  let checkStatus=()=>{
    setStatus(!status);
  }

  return(
<li className={(status)?"completetodo": " "} onClick={checkStatus} >{indexNumber+1} {value}<span onClick={deleteRow} >&times;</span></li> 
  )

}
