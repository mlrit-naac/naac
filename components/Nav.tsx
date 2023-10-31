import React from 'react'

const Nav = () => {
  return (
 <div className='sticky top-0 p-5 bg-[#129104] flex flex-row flex-wrap justify-center'>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Home</span>
            </button>
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Extended Profile</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">Programs</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">students</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">Teachers</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">Institution</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 1</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">1.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">1.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">1.3</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">1.4</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 2</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">2.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.3</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.4</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.5</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.6</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">2.7</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 3</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">3.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.3</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.4</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.5</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.6</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">3.7</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 4</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">4.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">4.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">4.3</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">4.4</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 5</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">5.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">5.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">5.3</a></li>
                <li className=""><a className="whitespace-no-wrap block  bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">5.4</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 6</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">6.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">6.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">6.3</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">6.4</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">6.5</a></li>

            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Criterion - 7</span>
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            <ul className="dropdwn-menu absolute w-full  justify-center items-center hidden  text-gray-700 bg-slate-200">
                <li className=""><a className="whitespace-no-wrap block bg-gray-200    px-4 py-2 hover:bg-gray-400" href="#">7.1</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">7.2</a></li>
                <li className=""><a className="whitespace-no-wrap block bg-gray-200 px-4 py-2 hover:bg-gray-400" href="#">7.3</a></li>
            </ul> 
        </div>
        <div className="dropdown relative inline-block ">
            <button className="drop-down inline-flex hover:text-slate-400  hover:border-white items-center   px-4 py-2 font-semibold text-white">
            <span className="mr-1">Feedback</span>
            </button>

        </div>
</div>
  )
}

export default Nav