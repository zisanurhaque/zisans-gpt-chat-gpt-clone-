import React, { useContext } from 'react'
import { Context } from '../../../App'

const FormComponent = () => {

  const { sentMessage, handleInput, inputData } = useContext(Context)

  return (
    <div className='mobile:h-[130px] mobile:border-t laptop:border-t-0 border-slate-600 laptop:h-[130px] flex justify-center items-center text-white flex-col gap-4 mobile:p-5 laptop:p-0'>

        <form onSubmit={(e) => sentMessage(e)} className='mobile:w-full laptop:w-[850px] bg-slate-700 rounded-md flex justify-between' style={{boxShadow: "0px 0px 6px 0px #0f172a"}}>

            <div className='px-2 flex justify-center items-center mobile:hidden laptop:flex'>
              <img src={"./user.png"} alt="Zisan's GPT" className='w-10 h-10 rounded-md'/>
            </div>

            <input onChange={(e) => handleInput(e)} value={inputData} type={"text"} placeholder="ask something" className='bg-transparent outline-none mobile:p-3 mobile:py-3 mobile:pr-0 laptop:p-4 pl-4 flex-1 text-base'/>

            <button className='mobile:px-3 laptop:px-6'>
                <i className="fa-regular fa-paper-plane text-slate-400"></i>
            </button>

        </form>

        <p className='mobile:text-xs laptop:text-sm text-slate-400'>Zisan's GPT Jan 0.1 Version. Free Research Preview. My goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>

    </div>
  )
}

export default FormComponent
