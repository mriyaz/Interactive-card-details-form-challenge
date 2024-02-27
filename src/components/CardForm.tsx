import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bgCardFront from '../images/bg-card-front.png';
import bgCardback from '../images/bg-card-back.png';
import ICardDetails from '../types';
import { SubmitHandler, useForm } from 'react-hook-form';

const CardForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICardDetails>();
    const navigate = useNavigate();
    const submitForm: SubmitHandler<ICardDetails> = async (cardDetails: ICardDetails) => {
        navigate('/completion', { state: { cardDetails } });
    }


    return (
        <div className='font-custom md:flex md:bg-mobile-img'>
            {/* Header Images */}
            <div className="relative h-64 bg-mobile-img md:w-4/12 md:h-screen">

                {/* Back of the Card */}
                <div className='w-3/4 absolute right-5 top-10 md:-right-40 md:top-96
                 shadow-darkGrayishViolet shadow-md rounded-lg'>
                    <img src={bgCardback} alt="Card back bg" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <span className="text-gray-200 text-xs ml-40">000</span>
                    </div>
                </div>
                {/* Front of the Card */}
                <div className='w-3/4 absolute  left-5 -bottom-8  md:left-56 md:bottom-96'>
                    <img src={bgCardFront} alt="Card front bg" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 text-gray-300">

                        <div className="flex gap-3 items-center" >
                            <div className=" bg-gray-100 w-7 h-7 rounded-full"></div>
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                        </div>
                        <br />
                        <div className="flex justify-between">
                            <span className="text-lg tracking-widest">0000</span>
                            <span className="text-lg tracking-widest">0000</span>
                            <span className="text-lg tracking-widest">0000</span>
                            <span className="text-lg tracking-widest">0000</span>
                        </div>

                        <div className="flex justify-between text-xs">
                            <span >JANE APPLESEED </span>
                            <span >00/00 </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* form */}
            <form onSubmit={handleSubmit(submitForm)} 
            className='py-10 text-sm space-y-4 bg-white my-10 px-5 md:w-7/12 md:my-0 md:pt-48 md:px-56'>

                {/* Card Holder Name */}
                <div>
                    <label htmlFor="name" className='block pb-1'>CARDHOLDER NAME</label>
                    <input type="text" id="name" className='border-2 w-full px-2 py-3 rounded-md text-base' placeholder='e.g. Jane Appleseed'
                        {...register('name',
                            {
                                required: 'Name on card is required',
                                pattern: {
                                    value: /^[A-Za-z ]+$/,
                                    message: 'Invalid name'
                                }
                            })} />
                    {errors.name && <p className='font-light text-red text-xs'>{errors.name.message}</p>}
                </div>

                {/* Card Number */}
                <div>
                    <label htmlFor="cardNumber" className='block pb-1'>CARD NUMBER</label>
                    <input type="number" id="cardNumber" className='border-2 w-full px-2 py-3 rounded-md text-base' placeholder='e.g. 1234 5678 9123 0000'  {...register('cardNumber', {
                        required: "Can't be blank",
                        pattern: {
                            value: /^[0-9]{16}$/,
                            message: 'Card number is invalid'
                        }
                    })}
                    />
                    {errors.cardNumber && <p className='font-light text-red text-xs'>{errors.cardNumber.message}</p>}
                </div>

                <div className="flex gap-10">
                    {/* Card Expiry Month & Year */}
                    <div>
                        <label htmlFor="expdate" className='block pb-1'>EXP. DATE (MM/YY)</label>
                        {/* Card Expiry Month  */}

                        <div className="flex gap-3">
                            <div className="flex flex-col">
                                <input type="text" id="expiryMonth" className='w-20 border-2  px-2 py-3 rounded-md text-base text-center' placeholder='MM' maxLength={2} inputMode="numeric"    {...register('expiryMonth', {
                                    required: "Can't be blank",
                                    pattern: {
                                        value: /^(0[1-9]|1[0-2])$/,
                                        message: 'Invalid month'
                                    }
                                })}
                                />
                                {errors.expiryMonth && <p className='font-light text-red text-xs'>{errors.expiryMonth.message}</p>}

                            </div>


                            {/* Card Expiry Year */}
                            <div className="flex flex-col">
                                <input type="text" id="expiryYear" className='w-20 border-2  px-2 py-3 rounded-md text-base text-center' placeholder='YY' maxLength={2} inputMode="numeric"   {...register('expiryYear', {
                                    required: "Can't be blank",
                                    pattern: {
                                        value: /^(1[5-9]|2[0-9]|3[0-5])$/,
                                        message: 'Invalid year'
                                    }
                                })}
                                />
                                {errors.expiryYear && <p className='font-light text-red text-xs'>{errors.expiryYear.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Card CVC */}
                    <div>
                        <label htmlFor="cvc" className='block pb-1'>CVC</label>
                        <input type="text" id="cvc" className='w-full border-2  px-2 py-3 rounded-md text-base' placeholder='123' maxLength={3} inputMode="numeric"
                            {...register('cvc', {
                                required: "Can't be blank",
                                pattern: {
                                    value: /^[0-9]{3,4}$/,
                                    message: 'CVC is invalid'
                                }
                            })}
                        />
                        {errors.cvc && <p className='font-light text-red text-xs'>{errors.cvc.message}</p>}
                    </div>
                </div>

                <button type='submit' className='w-full text-white bg-black py-3 rounded-md text-base'>Confirm</button>
            </form>
        </div>
    )
}

export default CardForm