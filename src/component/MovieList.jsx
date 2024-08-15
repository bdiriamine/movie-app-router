import React from 'react'
import MovieCard from './MovieCard';
export default function MovieList({data}) {
    return (
      <div  className='movies'  >
   {data.map((el)=><MovieCard  key={el.id} el={el}     /> ) }
       
      </div>
    )
  }