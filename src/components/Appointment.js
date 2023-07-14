import React, { useEffect } from 'react'
import Time from './Time'
import Vehicle from './Vehicle'
import Contact from './Contact'

export default function Appointment(props) {
    const [date, setDate]=React.useState(false)
    const [info, setInfo]=React.useState(false)
    const [contact, setContact]=React.useState(false)

    const oil_=React.useRef("")
    const brake_=React.useRef("")
    const AC_=React.useRef("")
    const tyre_=React.useRef("")
    const steering_=React.useRef("")
    const maintenance_=React.useRef("")
    const engine_=React.useRef("")
    const inspection_=React.useRef("")
    const Year=React.useRef("select");
    const Make=React.useRef("select");
    const Model=React.useRef("select");

    const [fname, setfname]=React.useState()
    const [lname, setlname]=React.useState()
    const [email, setEmail]=React.useState()
    const [number, setNumber]=React.useState()
    const [comment, setComments]=React.useState()

    useEffect(()=>{
        console.log("props.oil_:",props.oil_) 
        console.log("props.brake_:",props.brake_) 
        console.log("props.AC_:",props.AC_) 
        console.log("props.tyre_:",props.tyre_) 
        console.log("props.steering_:",props.steering_) 
        console.log("props.maintenance_:",props.maintenance_) 
        console.log("props.engine_:",props.engine_) 
        console.log("props.inspection_:",props.inspection_)
    }, [])
  return (
    <>
    {/* <div className='flex justify-center'>
        <div className='space-x-10'>
            <button onClick={e=>{}} className={`border ps-[1rem] rounded-md py-[0.2rem] ${date?"":""}`}>Appointment Type, Date & Time</button>   
            <button onClick={e=>{}} className='border ps-[1rem] rounded-md py-[0.2rem]'>Vehicle & Service Information</button>   
            <button onClick={e=>{}} className='border ps-[1rem] rounded-md py-[0.2rem]'>Contact Information & Submit</button>   
        </div>
    </div> */}
        {/* <div className='flex space-x-6'>
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
        </div> */}
    {!info?<Vehicle oil_ brake_ AC_ tyre_ steering_ maintenance_ engine_ inspection_ Year Make Model info/>:<></>}
    {/* {!contact&&info?<Contact fname setfname lname setlname email setEmail number setNumber comment setComments/>:void(0)} */}
    </>
  )
}
