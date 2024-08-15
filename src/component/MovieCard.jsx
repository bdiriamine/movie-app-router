import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, Route, Routes } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import MovieDetail from './MovieDetail';
export default function MovieCard({ el}) {
    return (
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.posterUrl}  className='img' />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
      {el.description}
      </Card.Text>
      <Rating   iconsCount={5}   initialValue={el.rating}  readonly={true}  fillColor='red' />
      <button>
                 <Routes>

                <Route path="/movies/:title" element={<MovieDetail movies={el} />} />

              </Routes>
              <Link to={`/movies/${encodeURIComponent(el.title)}`} className="view-details">View Details</Link>
      </button>
    </Card.Body>
  </Card>
  )
    };