import React, { useState } from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaRegSurprise } from "react-icons/fa";

export default function Card(props) {
    const[index,setIndex]=useState(0);
    let rev=props.data;
    console.log(rev);
  return (
    <div className='card flex flex-col justify-center  items-center w-full h-max relative gap-2 xl:gap-12 xl:static' >
      <img className="testimonial w-36 h-36 xl:w-36 xl:h-36 object-cover rounded-full relative xl:absolute xl:left-[28rem] xl:top-40 " src={rev[index].image} alt={rev[index].name} />
      <div className='mediaquery text-black xl:text-5xl text-3xl font-bold font-mono'>
        {rev[index].name}
      </div>
      <p className='mediaquery review w-4/6 relative xl:left-6 text-center font-serif xl:text-lg '>{rev[index].text}</p>
      <div className="buttons mediaquery flex flex-col items-center justify-center w-11/12 gap-4">
        <div className="caraousel_effect flex justify-evenly w-3/6 h-10">
        <button className="prev bg-black text-white w-8 h-8 flex justify-center items-center rounded-full"><GrPrevious/></button>
        <button className="next bg-black text-white w-8 h-8 flex justify-center items-center rounded-full"><GrNext/></button>
        </div>
        <button className="surprise w-3/6 h-10 rounded-md gap-3  flex justify-center items-center bg-black text-white">Surprise ME <FaRegSurprise/></button>
      </div>
    </div>
  )
}
