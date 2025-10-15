import  React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './App.css'

function Create() {
  const [task, setTask]= useState('')
   const [price, setPrice]= useState('')
   const [fullUrl, setImgUrl] = useState('');
  const navigate = useNavigate();
  const handleAdd = () =>{
    // event.preventDefault();
    const query = encodeURIComponent(task);
    const API_KEY = "52765326-f7a4dc6b33d9bc2b2ce0a2cbf";
     const fullUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo:1&per_page=1`
    setImgUrl(fullUrl);

    axios.post('http://localhost:3001/add', {task:task, price:price})

     // navigate('/Menu', { state: { task, price } })
    .then(result => {
      location.reload()
    })

    //.catch (err => console.log  (err))
  
   navigate('/menu', { state: {  fullUrl, task, price } });
  
    

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