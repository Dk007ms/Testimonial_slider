import React from 'react'
import Card from './Card'
import data from './data'

export default function TestimonialContainer() {
    
  return (
    <div className=' bg-red-50 w-11/12 h-max xl:w-3/6 xl:h-4/6 rounded-lg p-4 xl:flex xl:items-center'>
      <Card data={data}></Card>
    </div>
  )
}
