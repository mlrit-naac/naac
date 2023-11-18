import React from 'react'
const studentcentricmethods =[{id:1,'a':'The foundational concept in an educational framework is to give prime importance for providing all round development of students. This focused and student centric approach is reflected in our policies too.'},
            {id:2,'a':'The importance of academic excellence is to teach the students while concurrently learning human values, professional ethics, discipline, inventiveness and personality progress during their study period and continue throughout life.            '},
            {id:3,'a':'Integrating formal and informal learning approaches provides wide opportunities more than just classroom knowledge, but also helps to apply this knowledge in the real world.'},            
            {id:4,'a':'To provide 21st century skills set, MLRIT offer the strategies like experiential learning, participative learning & problem solving methodologies included in the day to day activities.'},            

]
const microproject =[{id:1,'a':"Micro Projects are a small version of project based learning focused on the real time application and provide possibly to integrate the previously acquired knowledge. Micro Projects is carried out among the small groups ie 3-4 students. Students choose a micro project from a list that the faculty has prepared or they can propose. Interdisciplinary projects also encouraged to do in micro projects. Every team is guided by a mentor. The faculty mentors can mentor two to three project groups from the same class or different class from the department. SWOT analysis helps to complete the projects successfully.Micro projects incorporated a good deal of student more autonomy, choice and responsibility than in the case of traditional instruction.Such a project-based learning methods (micro, mini project) is a key constituent in MLRIT curriculum to encourage the students to learn by investigating a complex question, problem or challenge. It helps in enhancing the higher order thinking by engaging in active learning."}
]
const clubs =[{id:1,'a':'Every department has a professional club run by the students themselves. Hackathons, Tech fests, SUPRA SAEIndia, Robowar, Aero design challenge are organized every year. Through these competitions students gain practical knowledge and design experience.'}
]
const seminars =[{id:1,'a':'In MLRIT, starting from first year to fourth year seminars is conducted for students to improve their presentation skills, communication skills and inter personal skills. In addition, such opportunities help to the students to prepare and understand the latest technologies and other updates. To implement this activity effectively, the class of 60 students is divided into three groups. Specific rubrics is designed for assess the seminar. MLRIT motivate students to participate in various co-curricular and extracurricular activities to explore their excellence.'},
]
const problemsolving =[{id:1,'a':"COTs – Concept Oriented Tutorials to improve Higher Order Thinking Skills (Bloom’s level- 4&5)."},
            {id:2,'a':"It’s noted that deficiencies exist in enhancing problem solving skills. The traditional model lacks in providing sufficient motivation for engineering undergraduates."},
            {id:3,'a':'COTs activity is aimed at developing the critical and analytical skills where students are expected not only to understand what they read but also pick it apart, analyze, evaluate and assess.'},
            {id:4,'a':'EPICS “Engineering Projects in Community Service" :This is one unique program were students are connect to community and try to design/ build and deploy systems to solve community - based problems in teams.            '},
]
const academic_calendar=[
        {id:1,'a':'MLR Institute of Technology has uniformity towards implementing the Semester Scheme for all academic programmes. In order to provide excellent academic flexibility to all the stakeholders involved in it. An academic calendar is structured based on the consultation with the Internal Quality Assurance Cell (IQAC), Controller of Examinations, Department Heads & other decision-making authorities. Each academic year is divided into two (Odd & Even) semesters.'},
        {id:2,'a':'Every semester is planned approximately for 14 to 15 weeks. During the semester, different activities will be provided for advanced and slow learners to help the students. The calendar includes various important curricular, co-curricular, extra-curricular deeds that to be conducted during the academic year to assist the stakeholders. This enables the students to be well prepared and to participate in all variety of activities.'},
        {id:3,'a':'IQAC sends Circulars to all the Departments, Committees/Cells etc to prepare their academic Plan, and the same is subtly integrated with the Academic Calendar. '},
        {id:4,'a':'In the academic calendar, every department includes activities like Conferences, Faculty Development Programs (FDP),  industrial visits, value added programs, professional body activities workshops, symposiums, Faculty Induction Programs (FIP), Seminars, training programs and various club events, public holidays etc., apart from internal  & external examinations.'},
        {id:5,'a':'After getting approval from the IQAC, the academic calendar will be published on the institution website (www.mlrinstitutions.ac.in) and displayed on the college notice board in advance and communicated to all stake holders as well. Adherence to the schedule is monitored by the principal office.        '},
        {id:6,'a':'A one-week induction programme will be conducted for the UG students at the beginning of the first year to guide students and make them feel comfortable with the new system.        '},

]
const teaching=[
        {id:1,'a':'Every faculty prepares a teaching plan with the detailed description of the topics to be delivered and how effectively it can be done during the class time.        '},
        {id:2,'a':'The faculties are encouraged to use ICT. Faculties are guided to follow different Active Learning Strategies in the teaching process in order to enable learning in students with different capabilities.        '},
        {id:3,'a':'Every month, an academic audit with respect to syllabus coverage, activities conducted is carried out by the IQAC. The audit ensures the adherence of teaching & other activities with respect to the designed academic calendar.'},
        {id:4,'a':'The teaching plan is structured in accordance with the needs of Outcome-Based Education (OBE). The contents of the course file are as follows to meet these requirements:'},
]
const teachingplan=[
    {id:1,'a':'Academic calendar'}, 
    {id:2,'a':'Student roll list    '},
    {id:3,'a':'Class time table & individual time table'}, 
    {id:4,'a':'Syllabus Copy includes (Course overview, Course objectives and outcomes, Learning resources like: text books, reference books, e-books, e- resources, Assessment methods and MOOC course links)'},
    {id:5,'a':'Mapping of course outcomes with PO’s and PSO’s    '},
    {id:6,'a':'Session Plan/Teaching Plan including (Link to the video lectures, Delivery methodologies, Active Learning Methodologies)    '},
    {id:7,'a':'Seminar topic'},
    {id:8,'a':'Assignment and tutorial questions with answers and Sample assignments'},
    {id:9,'a':'List of slow learners and remedial actions    '},
    {id:10,'a':'20 Objective type questions with answers per unit & for a core subjects 20 core Objective type questions with answers per unit'},
    {id:11,'a':'Curriculum feedback'}
]
const Critertion2_3 = () => {
  return (
<div className='bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] '>
    <div className='py-[30px]  bg-[#dcf3da]  w-full  px-[20px]'>
        <div className='  min-h-screen flex flex-col justify-start'>
            <div className='flex flex-row justify-center items-center bg-[#2196f3] py-2'>
                <p className=' text-4xl'>Criterion 2 - Teaching-Learning and Evaluation</p>
            </div>
            <div className='p-8 border-b-2 border-gray-400'>
              <p className='text-2xl text-center text-red-500'>Key Indicator - 2.3 Teaching - Learning Process</p>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.3.1</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                    Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences                
                </p>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Student centric methods:
                </p>
                <ul>
                    {
                        studentcentricmethods.map(function(data){
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
                    Experiential Learning:
                </p>
                <p className='text-left font-bold text-lg text-black'>
                    a. Micro Projects: “Project Based learning”
                </p>
                <ul>
                    {
                        microproject.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className='text-left font-bold text-lg text-black'>
                    b. Professional clubs
                </p>
                <ul>
                    {
                        clubs.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Participative Learning:
                </p>
                <p className='text-left font-bold text-lg text-black'>
                    Seminars
                </p>
                <ul>
                    {
                        seminars.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Problem Solving
                </p>
                <ul>
                    {
                        problemsolving.map(function(data){
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
                <a href="/" className='w-full  text-left' target="_blank" rel="noopener noreferrer" >
                        <button className='bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black '>Claim Form</button>
                      </a>
              </div>
            </div>
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.3.2</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                    Teachers use ICT enabled tools including online resources for effective teaching and learning process                
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
            <div className='flex flex-row py-8 px-4 border-b-2 border-gray-400'>
              <div className='px-8'><p className='text-left font-bold text-lg text-black'>2.3.1</p></div>
              <div>
                <p className='text-left font-bold text-lg text-black'>
                    Preparation and adherence of Academic Calendar and Teaching plans by the institution                
                </p>
                <br />
                <p className='text-left font-bold text-lg text-black'>
                    Academic Calendar
                </p>
                <ul>
                    {
                        academic_calendar.map(function(data){
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
                    Teaching Plan
                </p>
                <ul>
                    {
                        teaching.map(function(data){
                            return(
                                <li key={data.a}>
                                    <p className="text-left  text-lg text-black">
                                        {data.a}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='px-4'>
                    {
                        teachingplan.map(function(data){
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

export default Critertion2_3