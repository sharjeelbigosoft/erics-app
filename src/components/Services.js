import React from 'react'

export default function Services() {
  return (
    <div className='flex justify-center'>
        <div className='lg:w-1/2'>
          <div className='w-full'>
            <input type="checkbox" id="oil" name="oil"/>
            <label for="oil">Oil Change</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="brake" name="brake"/>
            <label for="brake">Brake Service</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="ac" name="ac"/>
            <label for="ac">AC & Heating</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="tyre" name="tyre"/>
            <label for="tyre">Tire Change</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="steering" name="steering"/>
            <label for="steering">Steering Repair</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="maintenance" name="maintenance"/>
            <label for="maintenance">General Maintenance</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="engine" name="engine"/>
            <label for="engine">Diagnostic / Check engine light</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input type="checkbox" id="inspection" name="inspection"/>
            <label for="inspection">State Inspection</label>
          </div>
          <textarea className='border rounded-md w-full' rows={5}></textarea>
        </div>
    </div>
  )
}
