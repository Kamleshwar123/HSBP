import React from 'react'
import SalonRating from '../../../const/rating'

export default function SalonList() {
  return ( 
    <>
    <div className='row'>
      <div className='col-md-3'>
        <div className='salon-box'>
          <div className='salon-img'>
            <img className='salon-img' src={'assets/images/salon1.webp'} alt="salon" height={"100%"} width={"100%"} />
          </div>
          <div className='salon-data'>
            <div className="d-flex">
            <div className='col-6'>
<div className="salon-n">
  <h1>HSBP Salon</h1>
  <p>Rohini, New Delhi</p>
  <p className='rating-amb'>AMBIENCE RATING</p>
</div>
<SalonRating />
            </div>
            <div className='col-6'>
              <div className='home-map'>
                <img src={'assets/images/map-icon.webp'} alt='map' height={"100%"} width={"100%"} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
