import React from 'react'
import TestimonialContainer from './components/TestimonialContainer'

export default function App() {
  return (
    <div className='w-screen h-screen bg-slate-950 flex flex-col gap-4  justify-center items-center'>
      <h1 className='text-white text-3xl font-mono'>Testimonials</h1>
      <TestimonialContainer/>
    </div>
  )
}
