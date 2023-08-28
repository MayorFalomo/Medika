"use client"
import React, { useState } from 'react'

type Props = {}

const Appointment = (props: Props) => {
    const [appointment, setAppointment] = useState<any>(false)
  return (
      <div>
            <h1>  Appointment Request </h1>
          <div className='flex items-center gap-5' >
              <img className="rounded-full w-12" src='./irene.jpg' alt="image" />
              <div className='' >
              <h2>Mark Walden </h2>
                  <p>45 Male, 12 April 9:30 </p>
                  </div>
              {appointment ?
                  <button className='border border-none outline-none text-blue-200 p-2' >Accept </button> :
              <button className='border border-none outline-none bg-declined-bg text-[#F496A1] p-3 rounded-md' >Declined </button> }
             
          </div>  
    </div>
  )
}

export default Appointment