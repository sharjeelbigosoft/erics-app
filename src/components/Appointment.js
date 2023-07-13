import React from 'react'

export default function Appointment() {
  return (
    <div>
        <div className='flex space-x-6'>
            <div>
                <input type="radio" id="wait" name="service" value="wait"/>
                <label className='ml-2' htmlFor="wait">Select Location</label>
            </div>
            <div>
                <input type="radio" id="drop" name="service" value="drop"/>
                <label className='ml-2' htmlFor="drop">Appointment Type, Date & Time</label>
            </div>
            <div>
                <input type="radio" id="drop" name="service" value="drop"/>
                <label className='ml-2' htmlFor="drop">Vehicle & Service Information</label>
            </div>
            <div>
                <input type="radio" id="drop" name="service" value="drop"/>
                <label className='ml-2' htmlFor="drop">Contact Information & Submit</label>
            </div>
        </div>
    </div>
  )
}
