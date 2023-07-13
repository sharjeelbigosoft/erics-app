import React from 'react'

export default function Vehicle() {
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
    const [Year, setYear]=React.useState("select");
    const [Make, setMake]=React.useState("select");
    const [Model, setModel]=React.useState("select");
  return (
    <div className='flex justify-center'>
        <div className='flex justify-between'>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="year">Year</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' onChange={e=>{console.log(e.target.value);setYear(Year=>e.target.value);}} name="year" id="year">
                <option value="select">Select Year</option>
                    {years.map((year, ind)=>{
                        return <option key={ind} value={year}>{year}</option>
                    })}
                </select>
            </div>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="make">Make</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' disabled={Year!=="select"?false:true} onChange={e=>{console.log(e.target.value);setMake(Make=>e.target.value);}} name="make" id="make">
                <option value="select">Select Make</option>
                    {makes.map((make, ind)=>{
                        return make.start_year<=Year&&(make.end_year>=Year||make.end_year==="")?<option key={ind} value={make.name}>{make.name}</option>:undefined
                    })}
                </select>
            </div>
            <div className="w-[300px] flex flex-col justify-around">
                <label htmlFor="model">Model</label>
                <select className='border rounded-md px-[2rem] py-[0.5rem] ' disabled={Make!=="select"?false:true} onChange={e=>{console.log(e.target.value);setModel(Model=>e.target.value);}} name="model" id="model">
                <option value="select">Select Model</option>
                    {models.map((model, ind)=>{
                        return model.start_year<=Year&&(model.end_year>=Year||model.end_year==="")&&model.make===Make?<option key={ind} value={model.name}>{model.name}</option>:undefined
                    })}
                </select>
            </div>
        </div>
    </div>
  )
}
