import React from "react";
import Crit1_1_1table from "./Crit1_1_1table";
const Criterion1 = () => {
  return (
    <div
      className="bg-[#dcf3da] max-w-full lg:mt-[100px]  flex lg:ml-[225px] "
      id="c1"
    >
      <div className="py-[30px]  bg-[#dcf3da]  w-full  px-[20px]">
        <div className="  min-h-screen flex flex-col justify-start">
          <div className="flex flex-row justify-center items-center bg-[#2196f3] py-2">
            <p className=" text-4xl">Criterion 1 - Curricular Aspects</p>
          </div>
          <div className="p-8 border-b-2 border-gray-400">
            <p className="text-2xl text-center text-red-500">
              Key Indicator - 1.1 Curriculum Design and Development
            </p>
          </div>
          <div className="flex flex-row py-8 px-4 border-b-2 border-gray-400">
            <div className="px-8">
              <p className="text-left font-bold text-lg text-black">1.1.1</p>
            </div>
            <div>
              <p className="text-left font-bold text-lg text-black">
                Curricular developed and implemented have relevance to the
                local, national, regional and global developmental needs which
                is reflected in Programme outcomes (POs), Programme Specific
                outcomes (PSOs) and Course Outcomes (COs) of the Programmes
                offered by the Institution
              </p>
              <ul>
                <li>
                  <p className="text-left  text-lg text-black">
                    MLR Institute of Technology ernphasizes on the clevelopmental needs at the local/national/global levels with formative necessities unblemished while planning its curriculum. The learning process manoeuvres through resull based instructional methods, with each course having a port of call which in turn is being driven by a well conceived mission and vision. T'he educational program is planned on after premise.
                  </p>
                </li>
                
                <a
                  href="/criterion1/1.1/1.1.1/claimform.pdf"
                  className="w-full  text-left flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] w-full p-4 mt-4 hover:bg-slate-300 text-left hover:text-black ">
                    Claim Form
                  </button>
                </a>
              </ul>
            </div>
          </div>
          <div className="flex flex-row py-8 px-4 border-b-2 border-gray-400">
            <div className="px-8">
              <p className="text-left font-bold text-lg text-black">1.1.2</p>
            </div>
            <div>
              <p className="text-left font-bold text-lg text-black">
              Average percentage of courses having focus on employability/
              entrepreneurship/ skill development offered by the institution during
              the last five years
              </p>
              <ul>
                <li>
                  <p className="text-left  text-lg text-black">
                    
                  MLR Institute of Technology strives to make industry ready students through various courses offered under different programs. Revision in syllabus of various courses and introduction of new prograrns is caused by the action taken on the feedback provicleci by different stakeholders. The Programmes are designed to nurture various skills among the students. The courses are designed with a view to build employability, entrepreneurship and skill development among the students. The syllabus is framed to cultivate research culture in young minds by including all cutting-edge technologies and hands on practices.                  
                  </p>
                </li>
                
                {/* <li>
                  <p className="text-left  text-xl text-blue-500 font-extrabold">
                    Response: 70.59{" "}
                  </p>
                </li>
                <li>
                  <p className="text-left  text-lg font-bold text-black">
                    1.1.2.1 How many programs were revised out of total number
                    of programs offered during the last five years?
                  </p>
                </li>
                <li>
                  <p className="text-left  text-xl text-blue-500 font-extrabold">
                    Response: 12
                  </p>
                </li>
                <li>
                  <p className="text-left  text-lg font-bold text-black">
                    1.1.2.2 Number of all programs offered by the institution
                    during the last five years
                  </p>
                </li>
                <li>
                  <p className="text-left text-xl text-blue-500 font-extrabold">
                    Response: 17
                  </p>
                </li> */}
                <a
                  href="/criterion1/1.1/1.1.2/claimform.pdf"
                  className="w-full  text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    Claim Form                  
                  </button>
                </a>
                
              </ul>
            </div>
          </div>

          {/* <div className="flex flex-row py-8 px-4 border-b-2 border-gray-400">
            <div className="px-8">
              <p className="text-left font-bold text-lg text-black">1.1.3</p>
            </div>
            <div>
              <p className="text-left font-bold text-lg flex flex-row flex-wrap text-black">
                Average percentage of courses having focus on
                employability/entrepreneurship/ skill development offered by the
                institution during the last five years{" "}
              </p>
              <ul>
                <li>
                  <p className="text-left  text-lg text-black">
                    MLR Institute of Technology strives to make industry ready
                    students through various courses offered under different
                    programs. Revision in syllabus of various courses and
                    introduction of new programs is caused by the action taken
                    on the feedback provided by different stakeholders. The
                    programmes are designed to nurture various skills among the
                    students. The courses are designed with a view to build
                    employability, entrepreneurship and skill development among
                    the students. The syllabus is framed to cultivate research
                    culture in young minds by including all cutting edge
                    technologies and hands on practices.{" "}
                  </p>
                </li>
                <br />
                <li>
                  <p className="text-left  text-xl text-blue-500 font-extrabold">
                    Response: 87%
                  </p>
                </li>

                <li>
                  <p className="text-left  text-lg font-bold text-black">
                    1.1.3.1 Number of courses having focus on employability/
                    entrepreneurship/ skill development year-wise during the
                    last five years
                  </p>
                  <Crit1_1_1table />
                </li>
                <a
                  href="/"
                  className="w-full "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left  w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    Program/Curriculum/Syllabus of the courses
                  </button>
                </a>
                <a
                  href="/"
                  className="w-full  text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    MoU'swith revelant organizations for these courses, if any
                  </button>
                </a>
                <a
                  href="/"
                  className="w-full  text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    Minutes of the Boards of Studies
                  </button>
                </a>
                <a
                  href="/"
                  className="w-full  text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    Academic Council Minutes
                  </button>
                </a>
                <a
                  href="/"
                  className="w-full  text-left"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#40a33e] text-left w-full p-4 mt-4 hover:bg-slate-300 hover:text-black ">
                    Details of Program Syllabus Revision in Last 5 Years
                  </button>
                </a>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Criterion1;
