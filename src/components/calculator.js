import React, { useState } from 'react'

export default function Calculator() {
   const km = 1
   const Kmmtrs = 1000
   const Kmcm = 100000
   const Mtcm = 100
  
    const [value1, setValue1] =useState("")
    const [value2, setValue2] =useState("")
    const [value, setValue] = useState("")
    const [valueInitial, setValueInitial] = useState("")
    const [hide, setHide] = useState(false)
    

   const handleValue1 = (e) =>{
          if(e.target.value == "Meters"){
            setHide(true)
          }
          else{
            setHide(false)
          }
      console.log("VALUE 1", e.target.value)
      setValue1(e.target.value)
   

    }

   const handleValue2 = (e) =>{
    
    setValue2(e.target.value)
 }

   const Calculate = (e) =>{
    if(value1 == "Kilometres"){
       if(value2 == "Meters"){

       
      console.log("VALUE INITIAL", valueInitial)
      setValue(valueInitial*Kmmtrs)
    }
    else{
      setValue(valueInitial*Kmcm)  
    }
    }
    if(value1 == "Meters"){
      
      console.log("VALUE INITIAL", valueInitial)
   
      setValue(valueInitial*Mtcm)
 
    }
    



  
}

  return (
    <div className='small:pr-[50px] small:pl-[50px] small:pb-[100px] small:pt-[100px] sm:pr-[50px] sm:pl-[50px] sm:pb-[100px] sm:pt-[100px] lg:pr-[300px] md:pr-[100px] lg:pt-[100px] md:pt-[100px] lg:pb-[200px] lg:pl-[300px] md:pl-[100px] '>
        <div className='shadow-lg p-10 pb-[30px] '>
        <div className='font-semibold mb-4  text-[30px] '> Calculate </div>  
            <div className='mb-2'>  
            <input type="number" name='value' onChange={event => setValueInitial(event.target.value)}  className="bg-indigo-100 rounded-md focus:outline-none border-[1px] w-full pl-[5px] pt-[5px] " />     
            </div>
            <div className="grid pt-4 pb-4 grid grid-cols-3 gap-4 align-bottom items-end">     
            <div >
            <span className='float-left font-semibold'>
                From     
            </span>
            <select onClick={handleValue1} className='bg-indigo-100 focus:outline-none mr-4 border-[1px] w-full pt-[5px] rounded-md '>
            <option className='bg-white' value="ss">Seleccione</option>   

            <option className='bg-white' value="Kilometres">Kilometres</option>   
            <option className='bg-white' value="Meters">Meters</option>                       
            </select>     
            </div>
            <div > 
            <span className='float-left font-semibold'>
                To     
            </span>    
            <select onClick={handleValue2} className='bg-indigo-100 rounded-md focus:outline-none w-full border-[1px] pt-[5px]'>
            <option className='bg-white' value="ss">Seleccione</option>   
                
            {!hide && <option className='bg-white' value="Meters">Meters</option>   
             }
            <option className='bg-white' value="Centimeters">Centimeters</option>   
            </select>     
            </div>
            <button  onClick={Calculate} className='bg-indigo-500 text-white rounded-md  h-[30px] ' >
                Calculate  
            </button>  
            </div>
            <div className='mt-2'>
            <h1 className='font-semibold '>
              Converted Value: {value}
              </h1>
            </div>
        </div>    
    </div>
  )
}
