import React, { useState, ChangeEvent } from "react";
import StarRating from 'react-svg-star-rating'

export default function SalonRating() {
    return ( 
      <><StarRating
        unit="half"
        isReadOnly
        initialRating={3.5} /></>
    )
};