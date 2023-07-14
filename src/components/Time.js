import React from 'react'
import Appointment from './Appointment';

export default function Time(props) {
    // let dates=()=>{
    //     let date=new Date();
    //     let arr=[];
    //     arr.push(date);
    //     const month=date.getMonth();
    //     console.log(month)
    //     for(date; date.getMonth()===month; date.setDate(date.getDate() + 1)){
    //         console.log(date);
    //         arr.push(date);
    //     }
    //     return arr;
    // }
    const [waiting, setWaiting]=React.useState();
    const [date, setDate]=React.useState();
    const [next, setNext]=React.useState(false)
  return (
    <>
    {next?<Appointment time={props.time} waiting date/>:
    <div className='flex flex-col items-center mt-20'>
        <div className='flex space-x-6'>
            <div>
                <input onChange={e=>setWaiting(waiting=>e.target.value)} type="radio" id="wait" name="service" value="wait"/>
                <label className='ml-2' htmlFor="wait">I will wait for my vehicle</label>
            </div>
            <div>
                <input onChange={e=>setWaiting(waiting=>e.target.value)} type="radio" id="drop" name="service" value="drop"/>
                <label className='ml-2' htmlFor="drop">I will drop off my vehicle</label>
            </div>
        </div>
        <div className='my-[2rem]'>
            <div className='p-[2rem] flex flex-col border rounded-md'>
                <input onChange={e=>setDate(date=>e.target.value)} className='border border-black' type="datetime-local" name="" id="dateTime" />
                <label htmlFor="dateTime">Select Date and Time</label>
            </div>
        </div>
    </div>
    }
    <button onClick={()=>{waiting&&date?setNext(next=>true):setNext(next=>false)}}>Next</button>
    </>
  )
}
