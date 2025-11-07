import  React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css'

function Menu() {
  
const [todos, setTodos] = useState([])
//const [fullUrl, setImgUrl] = useState('');
  const location = useLocation();
   const { task, price, fullUrl } = location.state || {};
   
  

useEffect(() => {

    
  axios.get('http://localhost:3001/get')
  .then(result => setTodos(result.data))
  .catch(err => console.log(err))
}, []);



 useEffect(() => {
    if (!task) {
     // setImgUrl('');
      return;
    }
    
        

 axios.get(fullUrl)
      .then(response => {
        const hits = response.data.hits;
        if (hits && hits.length > 0) {
          // Pick the first image URL
          setImgUrl(hits[1].webformatURL);
          console.log(setImgUrl);
        } else {
          setImgUrl(fullUrl);
        }
      })
      .catch(err => {
        console.error('Error fetching image:', err);
        //setImgUrl('');
      })
     // .finally(() => setLoading(false));
  }, [task]);
 
const handleEdit = (id) => {
 axios.put('http://localhost:3001/update/'+id)
  .then(result => {
    location.reload()
  })
  .catch(err => console.log(err))

}

const  handleDelete = (id) => {
 axios.delete('http://localhost:3001/delete/'+id)
  .then(result => {
    location.reload()
  })
  .catch(err => console.log(err)) 
}

  return (
    <div className='home'>
      <h2>Menu List</h2>
     
{
  todos.length === 0 
  ?
  <div> <h2>No Record </h2></div>
  :
todos.map(todo => (
  <div className='task'>
    <div className='checkbox' onClick={ () => handleEdit (todo._id)}>
      {todo.done?
      <BsFillCheckCircleFill className='icon' >
       
      </BsFillCheckCircleFill>
      
       :<BsCircleFill className='icon'/>
       
   
    }
     
   <p className= { todo.done ? "line_through" : ""}> Name {todo.task} <br>
   </br> Price {todo.price}</p> 
    </div>
     
    <div>
      <span><BsFillTrashFill className='icon' onClick={ () => handleDelete(todo._id)}/></span>
    </div>
    
    <img 
        src={fullUrl}
        alt={`Image for ${task}`}
        style={{ maxWidth: "50px", maxHeight: "20px" }}
        onError={() => {
          console.error("Failed to load image", fullUrl);
        }}
      />
    </div>

    
))
}

    </div>
  )
}

export default Menu;


