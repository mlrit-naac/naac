import React from 'react'
import Crit2_1_1btable from './Crit2_1_1btable'
import Crit2_1_1ctable from './Crit2_1_1ctable'
const buttons_2_1_1 =[{id:1,name:'Average Enrollment percentage for last five years'},{id:2,name:'Average Enrollment percentage for last five years'},{id:3,name:'Admitted student details'}]
const buttons_2_1_2 =[{id:1,name:'Average percentage of seats filled against reversed categories'},{id:2,name:'Year wise number of seats marked for category wise admissions'},{id:3,name:'Year wise List of Admitted student details'},{id:4,name:'Government orders for Reservation'}]

const Criterion2_1 = () =>{
  return (
    <div className='bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] '>
    <div className='py-[30px]  bg-[#dcf3da]  w-full  px-[20px]'>
        <div className='  min-h-screen flex flex-col justify-start'>
            <div className='flex flex-row justify-center items-center bg-[#2196f3] py-2'>
                <p className=' text-4xl'>Criterion 2 - Teaching-Learning and Evaluation</p>
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
                <p className="text-left  text-lg text-black">
                    MLR Institute of Technology is strategically located in the Dundigal village and has ensured the entire human as well as infrastructure resources to create an enabling environment for academics, research, innovation and co-curricular activities. It offers excellent opportunities for participation of students in extracurricular activities like Sports, games and Cultural activities to enable holistic development of the students. The institution has its own Policy and SOP which guide admissions and the later course of action. All Policies are made as per the Policies of the Government of Telangana, MHRD, UGC and the JNTUH University. 
                </p>
                <br />
                <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" >
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Claim Form</button>
                </a>
                <br />
                <br />
                <p className='text-left font-bold text-lg text-black'>
                  2.1.1.1: Number of students admitted year wise during last five years
                </p>
                <Crit2_1_1btable/>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                  2.1.1.2: Number of sanctioned seats year wise during last five years
                </p>
                <Crit2_1_1ctable/>
                <br />
                <ul>
                    <p className='font-bold text-lg text-black'>
                    Total number of seats filled year wise
                    </p>
                    <p className='font-bold text-lg text-black'>
                        ---------------------------------------------------------------- X 100
                    </p>
                    <p className='font-bold text-lg text-black'>
                      Total number of sanctioned seats yearwise
                    </p>
                 </ul>
                  <p className='text-left  text-xl text-blue-500 font-extrabold'>
                      Response: 91.61%                         
                  </p> 
              </div>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.1.2</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                Average percentage of seats filled against reserved categories (SC, ST, OBC, Divyangjan, etc. as per applicable reservation policy ) during the last five years( exclusive of supernumerary seats)                 
                </p>
                <p className="text-left  text-lg text-black">
                MLR Institute of Technology has framed a policy for admitting students for both PG and UG programs. The admissions are governed by the State Government norms as well as that of the University like JNTUH. The Institution strictly adheres to the state government admission policies for convener admissions and reservations. MLRIT has policy to admit the students in management sports quota and conversion of unfilled reservation seats in to general quota.
                </p>
                <br />                
                {/* {
                  buttons_2_1_2.map(function(data){
                    return(
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" key={data.id}>
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>{data.name}</button>
                      </a>
                    )
                  })
                } */}
                <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" >
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Claim Form</button>
                </a>
              </div>
            </div> 
        </div>
    </div>
</div>
  )
}

export default Criterion2_1