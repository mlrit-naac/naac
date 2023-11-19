import React from 'react'
import Link from 'next/link'
const extendedprofile = [{id:1,item:'Programs'},{id:2,item:'Students'},{id:3,item:'Teachers'},{id:4,item:'Institution'}]
const crit1 = [{id:1,item:1.1},{id:2,item:1.2},{id:3,item:1.3},{id:4,item:1.4}]
const crit2 = [{id:1,item:2.1},{id:2,item:2.2},{id:3,item:2.3},{id:4,item:2.4},{id:5,item:2.5},{id:6,item:2.6},{id:7,item:2.7}]
const crit3 = [{id:1,item:3.1},{id:2,item:3.2},{id:3,item:3.3},{id:4,item:3.4},{id:5,item:3.5},{id:6,item:3.6},{id:7,item:3.7}]
const crit4 = [{id:1,item:4.1},{id:2,item:4.2},{id:3,item:4.3},{id:4,item:4.4}]
const crit5 = [{id:1,item:5.1},{id:2,item:5.2},{id:3,item:5.3},{id:4,item:5.4}]
const crit6 = [{id:1,item:6.1},{id:2,item:6.2},{id:3,item:6.3},{id:4,item:6.4}]
const crit7 = [{id:1,item:7.1},{id:2,item:7.2},{id:3,item:7.3}]

const Nav = () => {
  return (
    <div className='bg-[#129104] text-white hidden lg:flex  fixed top-[100px] left-0 w-[225px]  right-auto   inset-0'>
        <div className=' w-[225px]   flex flex-col max-h-full  overflow-y-auto  '>
            <div className=' px-6 pt-4'>
              <Link href='/' className='text-lg'>Home</Link>
            </div>
            <div className='px-6 pt-4'>
              <Link href='/' className='text-lg' >Extended Profile</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {extendedprofile.map(function(data){
                    return(
                    <div>
                        <Link href={`/}`} key={data.id}  className=' pl-2 border-stone-300 hover:border-white border-l-2  '>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion1/1.1' className='text-lg'>Criterion-1</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit1.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion1/${data.item}`} key={data.id}  className=' pl-2 border-stone-300 hover:border-white border-l-2  '>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion2/2.1' className='text-lg'>Criterion-2</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit2.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion2/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion3/3.1' className='text-lg'>Criterion-3</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit3.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion3/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion4/4.1' className='text-lg'>Criterion-4</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit4.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion4/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion5/5.1' className='text-lg'>Criterion-5</Link>
            </div> 
            <div className='flex flex-col px-10 pt-0'>
                    {crit5.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion5/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion6/6.1' className='text-lg'>Criterion-6</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit6.map(function(data){
                    return(
                    <div >
                        <Link href={`/criterion6/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 pt-4'>
              <Link href='/criterion7/7.1' className='text-lg'>Criterion-7</Link>
            </div>
            <div className='flex flex-col px-10 pt-0'>
                    {crit7.map(function(data){
                    return(
                    <div>
                        <Link href={`/criterion7/${data.item}`} key={data.id} className=' pl-2 border-stone-300 hover:border-white border-l-2'>{data.item}</Link>
                    </div>
                    )
                    })}            
            </div>
            <div className='px-6 py-4'>
              <Link href='/' className='text-lg'>Feedback</Link>
            </div>
            <div></div>
        </div>
    </div>
  );
};

export default Nav;
