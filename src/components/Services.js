import React from 'react'

export default function Services(props) {
  const [oil, setOil]=React.useState()
  const [brake, setBrake]=React.useState()
  const [AC, setAC]=React.useState()
  const [tyre, setTyre]=React.useState()
  const [steering, setSteering]=React.useState()
  const [maintenance, setMaintenance]=React.useState()
  const [engine, setEngine]=React.useState()
  const [inspection, setInspection]=React.useState()

  return (
    <div className='flex justify-center'>
        <div className='lg:w-1/2'>
          <div className=''>
            <input onClick={e=>{setOil(oil=>e.target.checked);console.log(typeof(props.oil_.current))}} type="checkbox" id="oil" name="oil"/>
            <label htmlFor="oil">Oil Change</label>
          </div>
          <textarea onChange={e=>{props.oil_.current=e.target.value;}} className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setBrake(brake=>e.target.checked);props.brake_.current.length===0?props.brake_.current=" ":void(0);}} type="checkbox" id="brake" name="brake"/>
            <label htmlFor="brake">Brake Service</label>
          </div>
          <textarea onChange={e=>{props.brake_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setAC(AC=>e.target.checked);props.AC_.current.length===0?props.AC_.current=" ":void(0);}} type="checkbox" id="ac" name="ac"/>
            <label htmlFor="ac">AC & Heating</label>
          </div>
          <textarea onChange={e=>{props.AC_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setTyre(tyre=>e.target.checked);props.tyre_.current.length===0?props.tyre_.current=" ":void(0);}} type="checkbox" id="tyre" name="tyre"/>
            <label htmlFor="tyre">Tyre Change</label>
          </div>
          <textarea onChange={e=>{props.tyre_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setSteering(steering=>e.target.checked);props.steering_.current.length===0?props.steering_.current=" ":void(0);}} type="checkbox" id="steering" name="steering"/>
            <label htmlFor="steering">Steering Repair</label>
          </div>
          <textarea onChange={e=>{props.steering_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setMaintenance(maintenance=>e.target.checked);props.maintenance_.current.length===0?props.maintenance.current=" ":void(0);}} type="checkbox" id="maintenance" name="maintenance"/>
            <label htmlFor="maintenance">General Maintenance</label>
          </div>
          <textarea onChange={e=>{props.maintenance_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setEngine(engine=>e.target.checked);props.engine_.current.length===0?props.engine_.current=" ":void(0);}} type="checkbox" id="engine" name="engine"/>
            <label htmlFor="engine">Diagnostic / Check engine light</label>
          </div>
          <textarea onChange={e=>{props.engine_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setInspection(inspection=>e.target.checked);props.inspection_.current.length===0?props.inspection_.current=" ":void(0);}} type="checkbox" id="inspection" name="inspection"/>
            <label htmlFor="inspection">State Inspection</label>
          </div>
          <textarea onChange={e=>{props.inspection_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
        </div>
    </div>
  )
}
