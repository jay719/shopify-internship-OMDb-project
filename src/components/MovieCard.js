import React, { useState } from 'react'
import Rating from 'react-rating'
import starEmpty from '../images/starEmpty.png'
import starYellow from '../images/starYellow.png'

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
    const changeBackgroundColor = (e) => {
        e.target.style.color = 'rgb(255 88 88)';
    }
    const changeColorBack = (e) => {
        e.target.style.color = '#c27a7a'
    }
    return (
        <div className="Mcard">
            <img 
                className="Mposter" 
                src={movie.Poster} 
                alt={movie.title} 
                style={ {
                    height: '10rem',
                    width:'40%'
                }
                    }
                />
            <h2 className="Mtitle">{movie.Title}</h2>
            <h3 className="Mgenre">Genre: {movie.Genre}</h3>
            <h2 className="Mrating">Rating: {movie.Rated}</h2>
            <p className="Mdescription"> {movie.Plot}</p>

            {add ? 
            <p style={{fontSize:'1.5em', cursor:'pointer',color:'#c27a7a'}} onMouseOver={changeBackgroundColor} onMouseLeave={changeColorBack} onClick={() => {addReview(!add)}} >+Add Review?</p> : 
            <div>
                <p style={{fontSize:'1em',cursor:'pointer',color:'#c27a7a'}} onMouseOver={changeBackgroundColor} onMouseLeave={changeColorBack} onClick={() => {addReview(!add)}} >-Hide Review?</p> 
                <div className="review">
                    <Rating
                    initialRating="0"
                    onChange={getRating}
                        emptySymbol={<img src={starEmpty} alt="empty-star" className="icon" />}
                        fullSymbol={<img src={starYellow} alt="full-star" className="icon" />}
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
            
            <button className="Nbutton" onClick={() => nominate(nomination)}>Nominate</button>
        </div>
    )
}
