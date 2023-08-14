import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {GoTriangleDown} from 'react-icons/go'
type Props = {}

const Headerbar = (props: Props) => {
  return (
    <div className="bg-#f9f9f9 border-2 border-red-700 min-w-full" >
      <div className="flex items-center justify-between w-full  border-2 border-blue-700" >
        <form className='relative w-7xl border-2 border-green-700' >
          <span className="absolute left-2" ><CiSearch fontSize="25px" /> </span>
          <input type="text" className="w-full placeholder:p-14 border-2 border-red-700" placeholder="Search Appointment, Patient or etc." />
        </form>
        <div className='flex items-center gap-7 border-4 border-green-700' >
        <span><AiOutlineQuestionCircle fontSize="25px" /> </span>
          <span><BiBell fontSize="25px" /> </span>
          <div className='flex items-center' >
            <img className="rounded-full w-12" src='./irene.jpg'  alt="image" />
            <div className='flex items-center' >
              <div>
              <h2>Brandon Sanderson </h2>
                <p>Dental Doctor </p>
                </div>
              <span><GoTriangleDown fontSize="25px" /> </span>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Headerbar