import React from 'react'
import Testimonial from './components/Testimonial'

export default function App() {
  return (
    <div className='w-screen h-screen bg-slate-950 flex flex-col gap-4  justify-center items-center'>
      <h1 className='text-white text-3xl font-mono'>Meet Our Team</h1>
      <Testimonial/>
    </div>
  )
}
