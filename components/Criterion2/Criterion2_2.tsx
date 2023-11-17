import React from 'react'
const p1 =[{id:1,'a':'Based on the IQAC recommendation, advanced and slow learners will be identified based on their previous academic performances'},
            {id:2,'a':'The result analysis coordinator of each department will prepare the advance and slow learners list based on mid exams, assignments and end semester examinations.'},
            {id:3,'a':'In the beginning of the program in first year their intermediate marks will be considered for identifying advance and slow learners'},
            {id:4,'a':'If their intermediate performance is 50% & above the students is considered as an advance learner and if their performance is below 50% is considered as slow learners.'},
            {id:5,'a':'For the consecutive years End semester marks will be consider for identifying advance and slow learners'},
            {id:6,'a':'Advance and slow learners list to be circulated to the concern class subject Faculty and their mentors.'},
            {id:7,'a':'Mentors will counsel them and identify their needs.'},
            {id:8,'a':'The mentors communicate the needs of advanced and slow learners to the concern class in-charges and Head of the departments.'},
            {id:9,'a':'The HOD’s and senior faculties of the department will discuss and finalize the activities required for their needs.'},
            {id:10,'a':'The list of activities will be finalized from the department and circulated to the students along with schedule and plan of action.'}
]
const p2 =[{id:1,'a':"Advanced learners are encouraged to learn the additional courses like MOOC’s etc."},
            {id:2,'a':'Exposed to new technologies like Robotics, IoT, AI & ML, 3D printing etc,.'},
            {id:3,'a':'Campus Recruitment and Training (CRT) for their better placement'},
            {id:4,'a':'Encouraged to participate in competitions, Smart India Hackathon,'},
            {id:5,'a':'Students are motivated to be members of professional bodies like IEEE, CSI, ISTE, IEI, IETE, ACM, SAE and ACCE etc.'},
            {id:6,'a':'Assisted in participation and presentation in national and International conferences/seminars/workshops etc.'},
            {id:7,'a':'Encouraged to learn advanced technologies.'}
]
const p3 =[{id:1,'a':'Remedial classes/extra classes are conducted for slow learners by subject experts '},
            {id:2,'a':'Special attention/counseling by the mentors.'},
            {id:3,'a':'Mentors communicate with their parents for improving the academic progress '},
            {id:4,'a':'Guided to take up various certification courses'},
            {id:5,'a':'Special assignments etc.'}
]              
const Criterion2_2 = () => {
  return (
<div className='bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] '>
    <div className='py-[30px]  bg-[#dcf3da]  w-full  px-[20px]'>
        <div className='  min-h-screen flex flex-col justify-start'>
            <div className='flex flex-row justify-center items-center bg-[#2196f3] py-2'>
                <p className=' text-4xl'>Criterion 2 - Teaching-Learning and Evaluation</p>
            </div>
            <div className='p-8 border-b-2 border-gray-400'>
              <p className='text-2xl text-center text-red-500'>Key Indicator - 2.2 Catering to Student Diversity</p>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.2.1</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                    The institution assesses the learning levels of the students and organises special Programmes to cater to differential learning needs of the student                
                </p>
                <p className="text-left  text-lg text-black">
                    Through a policy, MLRIT tries to help advanced learners to be excellent and slow learners to be better performers. Within the classroom there are different learning levels of students; some are very intelligent in learning and some are quite weak. Hence, it is essential to find out the abilities of the students in the classes. Based on the ability find out, a few students need only assistance and remaining students need a hard work and habitual thought.                
                </p>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Process of identifying advance and slow learners
                </p>
                <ul>
                    {
                        p1.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {`${data.id+'. '}`}{data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Programs to encourage Advanced Learners
                </p>
                <ul>
                    {
                        p2.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {`${data.id+'. '}`}{data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Conducting Programs to encourage Slow Learners
                </p>
                <ul>
                    {
                        p3.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {`${data.id+'. '}`}{data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <p className="text-left  text-lg text-black">
                    The process of providing additional inputs to the advanced learners and the slow learners is to make everyone better achievers.
                </p>
                <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" >
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Claim Form</button>
                      </a>
              </div>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.2.2</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                    Student - Full time teacher ratio (Data for the latest completedacademic year)                
                </p>
                <p className="text-left  text-lg text-black">
                    MLR Institute of technology maintains the full time faculty ratio as per the norms given by the statutory bodies. 
                </p>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                   Data Requirement:              
                </p>
                <p className="text-left  text-lg text-black">
                    Total number of students enrolled in the institution:   4513
                </p>
                <p className="text-left  text-lg text-black">
                    Total number of full time teachers in the institution:   242
                </p>
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

export default Criterion2_2