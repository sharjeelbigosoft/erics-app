import React, { useState } from 'react'
import Time from './Time'

export default function Place() {
    const [place, setPlace]=useState("select")
  return (
      <>
      {place==="select"?
    
    <div className='flex h-full justify-center items-center my-10'>
        <div className='space-y-[2rem]'>
            <div className='flex flex-col space-y-[1rem] border p-[1rem] rounded-md'>
                <div>
                    <p>Eric's Car Care - Med Center</p>
                    <address>6950 Kirby Dr <br />
                        Houston, Texas 77030</address>
                    <a href="tel:123-456-7890">123-456-7890</a>
                </div>
                <button onClick={e=>{setPlace(place=>"Eric's Car Care - Med Center")}} className='block justify-self-center bg-black text-white px-[2rem] py-[0.5rem] rounded-md'>Select Location</button>
            </div>
            <div className='flex flex-col space-y-[1rem] border p-[1rem] rounded-md'>
                <div>
                    <p>Eric's Car Care - Rice Village</p>
                    <address>5820 Kirby Dr <br />
                        Houston, Texas 77005</address>
                    <a href="tel:713-454-7860">713-454-7860</a>
                </div>
                <button onClick={e=>{setPlace(place=>"Eric's Car Care - Rice Village")}} className='block justify-self-center bg-black text-white px-[2rem] py-[0.5rem] rounded-md'>Select Location</button>
            </div>
        </div>
    </div>
    :
    <Time place/>}
    </>
  )
}
