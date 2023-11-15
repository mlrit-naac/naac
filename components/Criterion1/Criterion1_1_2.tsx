import React from 'react'
import Crit1_2table from './Crit1_2table'
const Criterion1_2 = () => {
  return (
    <div className='bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] ' id='c1'>
        <div className='py-[30px]  bg-[#dcf3da]  w-full  px-[20px]'>
            <div className='  min-h-screen flex flex-col justify-start'>
                <div className='flex flex-row justify-center items-center bg-[#2196f3] py-2'>
                    <p className=' text-4xl'>Criterion 1 - Curricular Aspects</p>
                </div>
                <div className='p-8 border-b-2 border-gray-400'>
                  <p className='text-2xl text-center text-red-500'>Key Indicator - 1.2 Academic Flexibility</p>
                </div>
                <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
                  <div className='px-8'><p className='text-left font-bold text-lg text-black'>1.2.1</p></div>
                  <div>
                    <p className='text-left font-bold text-lg text-black'>
                    Percentage of new courses introduced of the total number of courses across all programs offered during the last five years                    </p>
                    <ul>
                      <li>
                          <p className='text-left  text-lg text-black'>
                          MLR Institute of Technology changes the syllabus frequently in all programs by including new courses in curriculum. This is inextricably intertwined with the feedback on curriculum process. As per the SoP, Feedback on Curriculum is collected from the stakeholders and a designated committee will analyze and come up with action points for implementation. Based on the Action to be taken, new courses, revision in programs, and introduction of value addition courses, transferable skills etc are introduced. There are a total of 2931 Courses across the 17 Programs offered by MLRIT in the last five years. Out of these, 601 are the new courses introduced in the last five years across all the programs.                          </p>
                      </li>
                      <br />
                      <li>
                        <p className='font-bold text-lg text-black'>
                        1.2.1.1 How many new courses are introduced within the last five years?
                        </p>
                        <p className='text-left  text-xl text-blue-500 font-extrabold'>
                          Response: 601                          
                        </p> 
                        <p className='font-bold text-lg text-black'>
                        1.2.1.2 Number of courses offered by the institution across all programs during the last five years
                        </p>
                        <p className='text-left  text-xl text-blue-500 font-extrabold'>
                          Response: 2931                          
                        </p> 
                      </li>
                    </ul>
                    <br />
                    <Crit1_2table/>
                    <a href="/criterion1/1.2/1.2.1/claimform.pdf" className='w-full ' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left  w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Claim Form</button>
                    </a>
                    {/* <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Minutes of relevant Academic BOS</button>
                    </a>
                    <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Institutional data in prescribed format</button>
                    </a> */}
                  </div>
                </div> 
                <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
                  <div className='px-8'><p className='text-left font-bold text-lg text-black'>1.2.2</p></div>
                  <div>
                    <p className='text-left font-bold text-lg text-black'>
                    Percentage of Programmes in which Choice Based Credit System (CBCS)/elective course system has been implemented (Data for the latest completed academic year )                    </p>
                    <ul>
                      <li>
                        <p className='text-left  text-xl text-blue-500 font-extrabold'>
                          Response: 100                          
                        </p>                     
                      </li>
                      <li>
                      <p className='font-bold text-lg text-black'>
                        1.2.2.1 Number of programs in which CBCS/ Elective course system implemented.
                        </p>
                        <p className='text-left  text-xl text-blue-500 font-extrabold'>
                          Response: 15                          
                        </p> 
                      </li>
                      <li>
                        <p className='font-bold text-lg text-black'>
                        File Description
                        </p>                      </li>
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Minutes of relevant Academic Council</button>
                      </a>
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Minutes of relevant Academic BOS</button>
                      </a>
                      <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer">
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Program / Curriculum / Syllabus with electives Highlighted</button>
                      </a>
                      
                    </ul>
                  </div>
                </div>
  
            </div>

        </div>
    </div>
  )
}

export default Criterion1_2