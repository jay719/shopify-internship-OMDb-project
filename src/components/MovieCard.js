import React, { useState } from 'react'
import Rating from 'react-rating'


export default function MovieCard({movie, nominate}) {
    
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [add, addReview] = useState(true)
    const getRating = (newRating) => {
        setRating(newRating)
    }
    
    const nomination = {
        movie: movie,
        rating: rating,
        review: review
    }
    return (
        <div className="Mcard"> 
            <h1 className="Mtitle">{movie.Title}</h1>
            <h3 className="Mgenre">{movie.Genre}</h3>
            <h2 className="Mrating">{movie.Rated}</h2>
            <p className="Mdescription"> {movie.Plot}</p>
            <img className="Mposter" src={movie.Poster} alt={movie.title} style={ {height: '120px',
  width:'100px'}}/>
            {add ? 
            <p style={{fontSize:'1.5em', cursor:'pointer'}} onClick={() => {addReview(!add)}} >+Add Review?</p> : 
            <div>
                <p style={{fontSize:'1em',cursor:'pointer'}} onClick={() => {addReview(!add)}} >-Hide Review?</p> 
                <div className="review">
                    <Rating
                    initialRating="0"
                    onChange={getRating}
                    //     emptySymbol={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png" alt="empty-star" className="icon" />}
                    //     fullSymbol={<img src="../images/star-full.png" alt="full-star" className="icon" />}
                    />
                    <label className="label">
                    Review:
                        <input
                        className="review-text"
                        type="text" 
                        value={review}
                        onChange={(e) => {
                            setReview(e.target.value) 
                                }
                            }
                        />
                    </label>
                </div>
            </div>
            }
            
            <button className="Nbutton" onClick={() => nominate(nomination)}>Nominate?</button>
        </div>
    )
}