import  React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

import './App.css'

function Home() {
  
const [todos, setTodos] = useState([])

useEffect(() => {
  axios.get('http://localhost:3001/get')
  .then(result => setTodos(result.data))
  .catch(err => console.log(err))
}, [])
 
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
      <h2>Todo List</h2>
      <Create />


    </div>
  )
}

export default Home;
