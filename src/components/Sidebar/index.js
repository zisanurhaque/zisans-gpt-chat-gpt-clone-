import React, { useContext } from 'react'
import { Context } from '../../App'

const Sidebar = () => {

    const { chat, clearConversations, sentMessageFromHistory, sidebar } = useContext(Context)

  return (
    <div className={`mobile:col-span-1 tablet:col-span-1 laptop:col-span-1 desktop:col-span-1 bg-zinc-900 flex-col justify-between p-2 mobile:${sidebar ? "flex absolute top-12 w-[220px] rounded-md laptop:w-full mobile:h-[90vh]" : "hidden"} laptop:flex laptop:relative laptop:h-[100vh]`}>

        <div className='text-white flex flex-col'>
            <button onClick={(e) => clearConversations(e)} className='w-full p-3 flex items-center justify-start hover:bg-slate-700 rounded-md border mb-3'>
                <i className="fa-solid fa-plus w-6 text-left"></i>
                New Chat
            </button>
            {
                chat.map((item, i) => (
                    <button onClick={(e) => sentMessageFromHistory(item.ques)} key={i} className='w-full p-3 flex items-start justify-start hover:bg-slate-700 rounded-md text-left'>
                        <i className="fa-regular fa-message text-left w-9 mt-[5px]"></i>
                        <p className='text-left w-full p-0 m-0'>{item.ques}</p>
                    </button>
                ))
            }
        </div>

        <div className='text-white'>
            <button onClick={(e) => clearConversations(e)} className='w-full p-3 flex items-start gap-2 justify-start hover:bg-slate-700 rounded-md'>
                <i className="fa-regular fa-trash-can w-6 text-left mt-1"></i>
                <p className='w-full text-left'>Clear conversations</p>
            </button>
            <button className='w-full p-3 flex items-start gap-2 justify-start hover:bg-slate-700 rounded-md'>
                <i className="fa-solid fa-circle-half-stroke w-6 text-left mt-1"></i>
               <p className='w-full text-left'>Light mode</p>
            </button>
            <button className='w-full p-3 flex items-start gap-2 justify-start hover:bg-slate-700 rounded-md'>
                <i className="fa-brands fa-discord w-6 text-left mt-1"></i>
                <p className='w-full text-left'>ZisanAI Discord</p>
            </button>
            <button className='w-full p-3 flex items-start gap-2 justify-start hover:bg-slate-700 rounded-md'>
                <i className="fa-solid fa-up-right-from-square w-6 text-left mt-1"></i>
                <p className='w-full text-left'>Updates & FAQ</p>
            </button>
            <button className='w-full p-3 flex items-start gap-2 justify-start hover:bg-slate-700 rounded-md'>
                <i className="fa-solid fa-right-from-bracket w-6 text-left mt-1"></i>
                <p className='w-full text-left'>Logout</p>
            </button>
        </div>

    </div>
  )
}

export default Sidebar
