import React from 'react'
import StarRating from 'react-svg-star-rating'

export default function SalonRating() {
  
    return ( 
      <StarRating isHalfRating={true} isReadOnly initialRating={3.5} />
    )
};