import React from 'react'
import Card from './Card'
import data from './data'

export default function testimonial() {
    
  return (
    <div className=' bg-red-50 w-11/12 h-max xl:w-7/12 rounded-lg p-4'>
      <Card data={data}></Card>
    </div>
  )
}
