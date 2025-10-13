import  React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './App.css'

function Create() {
  const [task, setTask]= useState('')
   const [price, setPrice]= useState('')
  const navigate = useNavigate();
  const handleAdd = () =>{
    // event.preventDefault();
    
    axios.post('http://localhost:3001/add', {task:task, price:price})

     // navigate('/Menu', { state: { task, price } })
    .then(result => {
      location.reload()
    })
   navigate('/menu', { state: { task, price } });
  

}
  return (

    <div className="home">

    <div className='create_form' >
      <input type="text" placeholder='Enter Name' onChange={(e)=>setTask(e.target.value)}/>
       <input type="text" placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)}/>
        
      <button type="button" onClick={handleAdd}> Submit </button>
    </div>
    </div>
  );
}

export default Create;