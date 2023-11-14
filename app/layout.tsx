// "use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })
// const currenr = usePathname();

export const metadata: Metadata = {
  title: 'Mlrit',
  description: 'Generated by create next app',

}
const crt2 =[{n:'2.1'},{n:'2.2'},{n:'2.3'},{n:'2.4'},{n:'2.5'},{n:'2.6'},{n:'2.7'}]
const crt3 =['3.1','3.2','3.3','3.4','3.5','3.6','3.7']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      

     
       <header className='w-full h-[100px] fixed top-0 flex flex-row  bg-white'>
        <img src="/mlrit.jpeg" alt="mlrit" className='h-[100px]'/>
        <div className='flex flex-row justify-center w-full'>
          <img src="https://mlritnaac.web.app/images/header_cut.png" alt="" />
        </div>
       </header>
       <div className='flex flex-row w-full'>
        <nav className='bg-[#129104] hidden lg:flex overflow-y-auto fixed  top-[100px] left-0'>
          <div className='flex flex-col h-[99vh] z-1 w-[300px]'>
            
            <div className='p-4'>
              <a href='/'>Home</a>
            </div>
            <div className='p-4'>
              <p>Extended Profile</p>
            </div>
            <div className='p-4'>
              <p>Criterion-1</p>
            </div>
            <div className='px-6 flex flex-col gap-1'>
              <a href='/criterion1/1.1' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>1.1</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a>
            </div>
            <div className='p-4'>
              <p>Criterion-2</p>
            </div>
            <div className='px-6 flex flex-col gap-1'>
            {/* <a href='/criterion1/1.1' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>1.1</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a> */}
              {crt2.map(function(data){
                return(
                  <div>
                  {/* <a href='/criterion1/1.2' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>{data}</a> */}

                  </div>
                )
              })}
            </div>
            <div className='p-4'>
              <p>Criterion-3</p>
            </div>
            <div className='px-6 flex flex-col gap-1'>
            <a href='/criterion1/1.1' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>1.1</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a>
              <a href='/criterion1/1.1' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>1.1</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a>
              <a href='/criterion1/1.1' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>1.1</a>
              <a href='/criterion1/1.2' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.2</a>
              <a href='/criterion1/1.3' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.3</a>
              <a href='/criterion1/1.4' className='px-4 border-l-2 border-stone-300 hover:border-white active:border-red-600'>1.4</a>

              {/* {crt3.map(function(data){
                return(
                  <div>
                  <a href='/criterion1/1.2' className='px-4 border-l-2  border-stone-300 hover:border-white active:border-red-600'>{data.n}</a>

                  </div>
                )
              })} */}
                                
            </div>
          </div>
      </nav>
      {children}

      </div>
        
      </body>
    </html>
  )
}
