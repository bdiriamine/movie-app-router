import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Filter({filter,filterrating}) {

    const [rating, setRating] = useState(0)

   const handleRating = (rate) => {
       setRating(rate)
       filterrating(rating)
    }
 
  return (
    <div   className='filter'   >
     <div>
     <label>search by:</label>
      <input placeholder='title'  onChange={(e)=>filter(e.target.value)} />
     </div>
      <div>
      <label>search by rating:</label>
      <Rating    iconsCount={5}  onClick={handleRating}   />
      </div>
    
    </div>
  )
}
