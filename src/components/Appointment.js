import React, { useEffect } from 'react'
import axios from 'axios'
import Time from './Time'
import Vehicle from './Vehicle'
import Contact from './Contact'

export default function Appointment(props) {
    const years=["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023"]
    const makes=[
        {name:"Toyota", start_year:"2002", end_year:"2018"},
        {name:"Fiat", start_year:"2006", end_year:"2010"},
        {name:"Hyundai", start_year:"2005", end_year:""},
        {name:"Honda", start_year:"2018", end_year:""},
        {name:"Kia", start_year:"2014", end_year:""},
        {name:"BAIC", start_year:"2016", end_year:"2023"},
        {name:"Haval", start_year:"2020", end_year:""},
    ]
    const models=[
        {name:"Corolla", make:"Toyota", start_year:"2002", end_year:"",},
        {name:"Cross", make:"Toyota", start_year:"2002", end_year:"",},
        {name:"Fortuner", make:"Toyota", start_year:"2002", end_year:"",},
        {name:"Y26", make:"Fiat", start_year:"2006", end_year:"2009",},
        {name:"Elantra", make:"Hyundai", start_year:"2005", end_year:"",},
        {name:"Tucson", make:"Hyundai", start_year:"2005", end_year:"",},
        {name:"Civic", make:"Honda", start_year:"2018", end_year:"",},
        {name:"City", make:"Honda", start_year:"2018", end_year:"",},
        {name:"Vezel", make:"Honda", start_year:"2018", end_year:"",},
        {name:"Sportage", make:"Kia", start_year:"2014", end_year:"",},
        {name:"Grand Carnival", make:"Kia", start_year:"2014", end_year:"",},
        {name:"BJ40", make:"BAIC", start_year:"2016", end_year:"2019",},
        {name:"H6", make:"Haval", start_year:"2020", end_year:"",},
        {name:"Julion", make:"Haval", start_year:"2020", end_year:"",},
    ]
    // const [date, setDate]=React.useState(false)
    // const [info, setInfo]=React.useState(false)
    // const [contact, setContact]=React.useState(false)

    const [oil, setOil]=React.useState()
    const [brake, setBrake]=React.useState()
    const [AC, setAC]=React.useState()
    const [tyre, setTyre]=React.useState()
    const [steering, setSteering]=React.useState()
    const [maintenance, setMaintenance]=React.useState()
    const [engine, setEngine]=React.useState()
    const [inspection, setInspection]=React.useState()

    const oil_=React.useRef("")
    const brake_=React.useRef("")
    const AC_=React.useRef("")
    const tyre_=React.useRef("")
    const steering_=React.useRef("")
    const maintenance_=React.useRef("")
    const engine_=React.useRef("")
    const inspection_=React.useRef("")

    // const Year=React.useRef("select");
    // const Make=React.useRef("select");
    // const Model=React.useRef("select");

    const [fname, setfname]=React.useState()
    const [lname, setlname]=React.useState()
    const [email, setEmail]=React.useState()
    const [number, setNumber]=React.useState()
    const [comments, setComments]=React.useState()

    const [Year, setYear]=React.useState("select");
    const [Make, setMake]=React.useState("select");
    const [Model, setModel]=React.useState("select");
    
    let enableSubmit=()=>{
        if(oil||brake||AC||tyre||steering||maintenance||engine||inspection){
            if((fname&&lname&&email&&number&&Year&&Make&&Model)||comments){
                return true;
            }
        }
    }
    // useEffect(()=>{
    //     console.log("Place: ",props.place, "waiting: ", props.waiting, "Date: ", props.date)
    // }, [])
    let createPayload=async ()=>{
        let data={};
        let services=[]
        if(oil)
            services.push({oil:oil_.current})
        if(brake)
            services.push({brake:brake_.current})
        if(AC)
            services.push({AC:AC_.current})
        if(tyre)
            services.push({tyre:tyre_.current})
        if(steering)
            services.push({steering:steering_.current})
        if(maintenance)
            services.push({maintenance:maintenance_.current})
        if(engine)
            services.push({engine:engine_.current})
        if(inspection)
            services.push({inspection:inspection_.current})
        data.services=services;
        data.fname=fname;
        data.lname=lname;
        data.email=email;
        data.number=number;
        data.comments=comments;
        data.Year=Year;
        data.Make=Make;
        data.Model=Model;
        data.place=props.place;
        data.waiting=props.waiting;
        data.date=props.date;
        console.log(data)
        const response=await axios.post("http://localhost:5000/appointment", data, {headers: { "Content-Type": "application/x-www-form-urlencoded" }})
        console.log("Sent request")
    }

  return (
    <>
        {/* {!info?<Vehicle Year Make Model setInfo/>:void(0)}
        {!contact&&info?<Contact fname setfname lname setlname email setEmail number setNumber comment setComments/>:void(0)} */}
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
    <div className='flex justify-center'>
        <div className='flex justify-between'>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="year">Year</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' onChange={e=>{console.log(e.target.value);setYear(e.target.value);}} name="year" id="year">
                <option value="select">Select Year</option>
                    {years.map((year, ind)=>{
                        return <option key={ind} value={year}>{year}</option>
                    })}
                </select>
            </div>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="make">Make</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' disabled={Year!=="select"?false:true} onChange={e=>{console.log(e.target.value);setMake(e.target.value);}} name="make" id="make">
                <option value="select">Select Make</option>
                    {makes.map((make, ind)=>{
                        return make.start_year<=Year&&(make.end_year>=Year||make.end_year==="")?<option key={ind} value={make.name}>{make.name}</option>:undefined
                    })}
                </select>
            </div>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="model">Model</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' disabled={Make!=="select"?false:true} onChange={e=>{console.log(e.target.value);setModel(e.target.value);}} name="model" id="model">
                <option value="select">Select Model</option>
                    {models.map((model, ind)=>{
                        return model.start_year<=Year&&(model.end_year>=Year||model.end_year==="")&&model.make===Make?<option key={ind} value={model.name}>{model.name}</option>:undefined
                    })}
                </select>
            </div>
        </div>
    </div>


    <div className='flex justify-center'>
        <div className='lg:w-1/2'>
          <div className=''>
            <input onClick={e=>{setOil(oil=>e.target.checked);console.log(typeof(oil_.current))}} type="checkbox" id="oil" name="oil"/>
            <label htmlFor="oil">Oil Change</label>
          </div>
          <textarea onChange={e=>{oil_.current=e.target.value;}} className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setBrake(brake=>e.target.checked);brake_.current.length===0?brake_.current=" ":void(0);}} type="checkbox" id="brake" name="brake"/>
            <label htmlFor="brake">Brake Service</label>
          </div>
          <textarea onChange={e=>{brake_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setAC(AC=>e.target.checked);AC_.current.length===0?AC_.current=" ":void(0);}} type="checkbox" id="ac" name="ac"/>
            <label htmlFor="ac">AC & Heating</label>
          </div>
          <textarea onChange={e=>{AC_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setTyre(tyre=>e.target.checked);tyre_.current.length===0?tyre_.current=" ":void(0);}} type="checkbox" id="tyre" name="tyre"/>
            <label htmlFor="tyre">Tyre Change</label>
          </div>
          <textarea onChange={e=>{tyre_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setSteering(steering=>e.target.checked);steering_.current.length===0?steering_.current=" ":void(0);}} type="checkbox" id="steering" name="steering"/>
            <label htmlFor="steering">Steering Repair</label>
          </div>
          <textarea onChange={e=>{steering_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setMaintenance(maintenance=>e.target.checked);maintenance_.current.length===0?maintenance.current=" ":void(0);}} type="checkbox" id="maintenance" name="maintenance"/>
            <label htmlFor="maintenance">General Maintenance</label>
          </div>
          <textarea onChange={e=>{maintenance_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setEngine(engine=>e.target.checked);engine_.current.length===0?engine_.current=" ":void(0);}} type="checkbox" id="engine" name="engine"/>
            <label htmlFor="engine">Diagnostic / Check engine light</label>
          </div>
          <textarea onChange={e=>{engine_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
          
          <div>
            <input onClick={e=>{setInspection(inspection=>e.target.checked);inspection_.current.length===0?inspection_.current=" ":void(0);}} type="checkbox" id="inspection" name="inspection"/>
            <label htmlFor="inspection">State Inspection</label>
          </div>
          <textarea onChange={e=>{inspection_.current=e.target.value;}}  className='border rounded-md w-full' rows={5}></textarea>
        </div>
    </div>

    <div className='flex justify-center'>
        <div className='space-y-4'>
            <div className='flex space-x-6'>
                <div className='flex flex-col'>
                    <label htmlFor='fname'>First Name</label>
                    <input onChange={e=>{setfname(fname=>e.target.value)}} className='border rounded-md px=[1rem] py-[0.1rem] w-[15rem]' id='fname' type='text' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='lname'>Last Name</label>
                    <input onChange={e=>{setlname(lname=>e.target.value)}} className='border rounded-md px=[1rem] py-[0.1rem] w-[15rem]' id='lname' type='text' />
                </div>
            </div>
            <div className='flex space-x-6'>
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email Address</label>
                    <input onChange={e=>{setEmail(email=>e.target.value)}} className='border rounded-md px=[1rem] py-[0.1rem] w-[15rem]' id='email' type='email' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='number'>Mobile Number</label>
                    <input onChange={e=>{setNumber(number=>e.target.value)}} className='border rounded-md px=[1rem] py-[0.1rem] w-[15rem]' id='number' type='tel' />
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='comments'>Comments (Optional)</label>
                <textarea onChange={e=>{setComments(comments=>e.target.value)}} className='border rounded-md' id='comments' rows={5}></textarea>
            </div>
        </div>
    </div>
    {enableSubmit()?<button onClick={createPayload} className='px-[2rem] py-[0.2rem] text-slate-700 border rounded-md hover:text-white hover:bg-slate-700'>Book</button>:<button disabled className='px-[2rem] py-[0.2rem] text-slate-700 border rounded-md'>Book</button>}
    </>
  )
}
