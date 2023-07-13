import React from 'react'

export default function Place() {
  return (
    <div className='flex h-full justify-center items-center'>
        <div className='space-y-[2rem]'>
            <div className='flex flex-col space-y-[1rem] border p-[1rem] rounded-md'>
                <div>
                    <p>Eric's Car Care - Med Center</p>
                    <address>6950 Kirby Dr <br />
                        Houston, Texas 77030</address>
                    <a href="tel:123-456-7890">123-456-7890</a>
                </div>
                <button className='block justify-self-center bg-black text-white px-[2rem] py-[0.5rem] rounded-md'>Select Location</button>
            </div>
            <div className='flex flex-col space-y-[1rem] border p-[1rem] rounded-md'>
                <div>
                    <p>Eric's Car Care - Rice Village</p>
                    <address>5820 Kirby Dr <br />
                        Houston, Texas 77005</address>
                    <a href="tel:713-454-7860">713-454-7860</a>
                </div>
                <button className='block justify-self-center bg-black text-white px-[2rem] py-[0.5rem] rounded-md'>Select Location</button>
            </div>
        </div>
    </div>
  )
}
