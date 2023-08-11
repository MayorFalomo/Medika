import React from 'react'

type Props = {}

const Headerbar = (props: Props) => {
  return (
    <div>
      <div className="" >
        <form>
          <input type="text" className="" placeholder="Search Appointment, Patient or etc." />
        </form>
        <div>
        <span>question </span>
          <span>Bell </span>
          <div>
            <img alt="image" className="" />
            <div>
              <h2>Doctors Name </h2>
              <p>Specializing </p>
              <span>Drop Arrow </span>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Headerbar