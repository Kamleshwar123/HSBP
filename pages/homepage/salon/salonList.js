import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import StarRating from 'react-svg-star-rating'
import callIcon from '../../../public/assets/icon/call-_icon.webp'
import CallendarIcon from '../../../public/assets/icon/callendar-clock.webp'

export default function SalonList(props) {
  return (
    <>
      <div className='col-md-3'>
        <div className='salon-box'>
          <div className='salon-img'>
            <img className='salon-img' src={props.SalonImg} alt="salon" height={"100%"} width={"100%"} />
          </div>
          <div className='salon-data'>
            <div className="d-flex">
              <div className='col-6'>
                <div className="salon-n">
                  <h1>{props.salonName}</h1>
                  <p>{props.salonAdd}</p>
                  <p className='rating-amb'>AMBIENCE RATING</p>
                </div>
                <StarRating
                  unit="half"
                  isReadOnly
                  initialRating={props.SalonRating} />
              </div>
              <div className='col-6'>
                <div className='home-map'>
                  <img src={'assets/images/map-icon.webp'} alt='map' height={"100%"} width={"100%"} />
                  <p>2.1 Km</p>
                </div>
                <div className='rating-amb-right'>
                  <p className='rating-amb-bg'>{props.SalonRating}</p>
                  <p>{props.SalonReview}</p>
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <div className='col-6'>
                <div className='salon-data-btn salon-data-btn1 '>
                  <Link href={'tel:+917565059119'}>
                    <Image src={callIcon}
                      alt={'call'}
                      height={'100%'}
                      width={'100%'}
                      className={'salon-call-icon'}
                    />
                    <p>Call Now</p>
                  </Link>
                </div>
              </div>
              <div className='col-6'>
                <div className='salon-data-btn'>
                  <Link href={'/'}>
                    <Image src={CallendarIcon}
                      alt={'call'}
                      height={'100%'}
                      width={'100%'}
                      className={'salon-call-icon'}
                    />
                    <p>Book Now</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
