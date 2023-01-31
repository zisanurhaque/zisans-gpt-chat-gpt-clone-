import React, { useContext } from 'react'
import Chat from './Chat'
import FormComponent from './Form'
import Hero from './Hero'
import { Context } from '../../App'

const Main = () => {

  const { isChat, chatScroll, sidebar, setSidebar } = useContext(Context)

  return (
    <div className='bg-gray-800 w-full mobile:col-span-1 tablet:col-span-5 laptop:col-span-5 desktop:col-span-6 flex flex-col justify-between h-[100vh]'>
    
        <div className='mobile:col-span-1 tablet:col-span-6 laptop:col-span-7 h-12 border-b border-slate-600 mobile:flex laptop:hidden items-center justify-between px-5'>
          <button onClick={() => setSidebar(!sidebar)} className='text-white'>
            <i className="fa-solid fa-bars-staggered text-xl"></i>
          </button>
        </div>

        <div className='w-full flex flex-1 justify-center text-slate-200 overflow-hidden overflow-y-scroll' ref={chatScroll}>
          { isChat ? <Chat/> : <Hero/> }
        </div>
        <FormComponent/>
        
    </div>
  )
}

export default Main