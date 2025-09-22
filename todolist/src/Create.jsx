import  React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function Create({ onTaskAdded }) {

 // const [task, setTask]= useState('')
 
  const [task, setTask]= useState([])

  

  const fetchtask = () => {
    axios.get('http://localhost:3001/get')
           .then((res)=>setTask(res.data))
       // console.log('Fetched:', res.data);     // debug
        //setTask();
        //fetchtask();                     // update tasks state
      

      .catch(err => console.error(err));
  };

 useEffect(() => {
    fetchtask();
  }, []);

  const handleAdd = () =>{
    axios.post('http://localhost:3001/add', {task: task})
       .then(res => {
      setTask();      // clear input
      onTaskAdded(res.data);      // ⬅️ refresh list here
         })
    .catch (err => console.log  (err))
  };

  

  return (

    <div className="home">

    <div className='create_form' >
      <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}> Add</button>
    </div>
    </div>
  );
}

export default Create;