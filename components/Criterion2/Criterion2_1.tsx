import React from 'react'
import Crit2_1_1table from './Crit2_1_1table'
// import Crit2_1_1btable from './Crit2_1_1btable'
import Crit2_1_1ctable from './Crit2_1_1ctable'
const buttons_2_1_1 =[{id:1,name:'Average Enrollment percentage for last five years'},{id:2,name:'Average Enrollment percentage for last five years'},{id:3,name:'Admitted student details'}]
const buttons_2_1_2 =[{id:1,name:'Average percentage of seats filled against reversed categories'},{id:2,name:'Year wise number of seats marked for category wise admissions'},{id:3,name:'Year wise List of Admitted student details'},{id:4,name:'Government orders for Reservation'}]

const Criterion2_1 = () =>{
  return (
    <div className='bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] '>
    <div className='py-[30px]  bg-[#dcf3da]  w-full  px-[20px]'>
        <div className='  min-h-screen flex flex-col justify-start'>
            <div className='flex flex-row justify-center items-center bg-[#2196f3] py-2'>
                <p className=' text-4xl'>Criterion 2 - Curricular Aspects</p>
            </div>
            <div className='p-8 border-b-2 border-gray-400'>
              <p className='text-2xl text-center text-red-500'>Key Indicator - 2.1 Student Enrollment and Profile</p>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.1.1</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                Average Enrolment percentage (Average of last five years)                
                </p>
                <br />
                <Crit2_1_1table/>  
                <br />  
                {/* <Crit2_1_1btable  />  */}
                <p className='text-left  text-lg text-black'>
                  Average Percentage = 91.61%
                </p>
                {
                  buttons_2_1_1.map(function(data){
                    return(
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" key={data.id}>
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>{data.name}</button>
                      </a>
                    )
                  })
                }
              </div>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.1.2</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                Average percentage of seats filled against reserved categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy ) during the last five years ( exclusive of supernumerary seats)                
                </p>
                <br />
                <Crit2_1_1ctable/>
                <br />
                <ul>
                  <li>
                      <p className='text-left  text-lg text-black'>
                      Average percentage = 91.57%                      
                      </p>
                  </li>      
                </ul>                
                {
                  buttons_2_1_2.map(function(data){
                    return(
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" key={data.id}>
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>{data.name}</button>
                      </a>
                    )
                  })
                }
              </div>
            </div> 
        </div>
    </div>
</div>
  )
}

export default Criterion2_1