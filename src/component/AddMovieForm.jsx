import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddMovieForm({addmovie} ) {
    const [titleMovie, settitleMovie] = useState('')
    const [desc, setDescription] = useState('')
    const [url, setUrl] = useState()
    const [rating, setRating] = useState(0)
  const navigate = useNavigate();
    const handlesubmit=(e)=>{
      e.preventDefault()
        addmovie(titleMovie,desc,url,rating)
        navigate('/')
    } 

  return (
    <form    onSubmit={handlesubmit}   >
        <label>title:</label>
        <input   className='input' onChange={(e)=>settitleMovie(e.target.value)}/>
        <label>description:</label>
        <input  className='input'  onChange={(e)=>setDescription(e.target.value)} />
        <label>url:</label>
        <input className='input' onChange={(e)=>setUrl(e.target.value)}  />
        <label>rating:</label>
        <input className='input'   type='number'  min={0} max={5} onChange={(e)=>setRating(e.target.value)}/>
        <button>save</button>
    </form>
  )
}
