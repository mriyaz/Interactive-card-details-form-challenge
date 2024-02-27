import React from 'react';
import bgCardFront from '../images/bg-card-front.png';
import bgCardback from '../images/bg-card-back.png';
import iconComplete from '../images/icon-complete.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import ICardDetails from '../types';


const CardSubmitted = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const cardDetails:ICardDetails = location.state.cardDetails;
  return (
    <div className='font-custom md:flex md:bg-mobile-img'>
      {/* Header Images */}
      <div className="relative h-64 bg-mobile-img md:w-4/12 md:h-screen">

        {/* Back of the Card */}
        <div className='w-3/4 absolute right-5 top-10 md:-right-40 md:top-96
                 shadow-darkGrayishViolet shadow-md rounded-lg'>
          <img src={bgCardback} alt="Card back bg" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-gray-200 text-xs ml-48">{cardDetails.cvc}</span>
          </div>
        </div>

        {/* Front of the Card */}
        <div className='w-3/4 absolute  left-5 -bottom-8 md:left-56 md:bottom-96 '>
          <img src={bgCardFront} alt="Card front bg" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 text-gray-300">

            <div className="flex gap-3 items-center" >
              <div className=" bg-gray-100 w-7 h-7 rounded-full"></div>
              <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
            </div>
            <br />
            <div className="flex justify-between">
              <span className="text-lg tracking-widest  md:text-xl">{cardDetails.cardNumber.replace(/(.{4})/g, "$1 ").trim()}</span>
             
            </div>

            <div className="flex justify-between text-xs">
              <span className='uppercase tracking-widest' >{cardDetails.name} </span>
              <span >{cardDetails.expiryMonth}/{cardDetails.expiryYear} </span>
            </div>
          </div>
        </div>

      </div>

      {/* Thankyou */}
      <div className='py-10 text-sm  bg-white my-10 px-5 flex flex-col justify-center items-center gap-5 md:w-7/12 md:my-0 md:pt-14 md:px-56'>
        <img src={iconComplete} alt="Icon Complete" className='w-20 '/>
        <span className='uppercase text-3xl tracking-widest'>Thank you!</span>
        <span className='text-lg'>We've added your card details</span>

        <button className='w-full text-white bg-black py-3 rounded-md text-base mt-10' onClick={()=>{navigate('/')}}>Continue</button>
      </div>
    </div>
  )
}

export default CardSubmitted