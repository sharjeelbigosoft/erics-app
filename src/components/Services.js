import React from 'react'

export default function Services() {
  const [oil, setOil]=React.useState()
  const [brake, setBrake]=React.useState()
  const [AC, setAC]=React.useState()
  const [tyre, setTyre]=React.useState()
  const [steering, setSteering]=React.useState()
  const [maintenance, setMaintenance]=React.useState()
  const [engine, setEngine]=React.useState()
  const [inspection, setInspection]=React.useState()

  const oil_=React.useRef()
  const brake_=React.useRef()
  const AC_=React.useRef()
  const tyre_=React.useRef()
  const steering_=React.useRef()
  const maintenance_=React.useRef()
  const engine_=React.useRef()
  const inspection_=React.useRef()
  return (
    <div className='flex justify-center'>
        <div className='lg:w-1/2'>
          <div className=''>
            <input onClick={e=>{setOil(oil=>e.target.checked);}} type="checkbox" id="oil" name="oil"/>
            <label htmlFor="oil">Oil Change</label>
          </div>
          <textarea onChange={e=>{oil_.current=e.target.value;}} className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setBrake(brake=>e.target.checked);}} type="checkbox" id="brake" name="brake"/>
            <label htmlFor="brake">Brake Service</label>
          </div>
          <textarea onChange={e=>{brake_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setAC(AC=>e.target.checked);}} type="checkbox" id="ac" name="ac"/>
            <label htmlFor="ac">AC & Heating</label>
          </div>
          <textarea onChange={e=>{AC_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setTyre(tyre=>e.target.checked);}} type="checkbox" id="tyre" name="tyre"/>
            <label htmlFor="tyre">Tire Change</label>
          </div>
          <textarea onChange={e=>{tyre_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setSteering(steering=>e.target.checked);}} type="checkbox" id="steering" name="steering"/>
            <label htmlFor="steering">Steering Repair</label>
          </div>
          <textarea onChange={e=>{steering_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setMaintenance(maintenance=>e.target.checked);}} type="checkbox" id="maintenance" name="maintenance"/>
            <label htmlFor="maintenance">General Maintenance</label>
          </div>
          <textarea onChange={e=>{maintenance_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setEngine(engine=>e.target.checked);}} type="checkbox" id="engine" name="engine"/>
            <label htmlFor="engine">Diagnostic / Check engine light</label>
          </div>
          <textarea onChange={e=>{engine_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          <div>
            <input onClick={e=>{setInspection(inspection=>e.target.checked);}} type="checkbox" id="inspection" name="inspection"/>
            <label htmlFor="inspection">State Inspection</label>
          </div>
          <textarea onChange={e=>{inspection_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
        </div>
    </div>
  )
}
