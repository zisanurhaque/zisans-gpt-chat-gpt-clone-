import React, { useContext } from 'react'
import { Context } from '../../../App'
import { exampleQuestions } from '../../data/example'

const Hero = () => {

    const { handleExample } = useContext(Context)

  return (
    <div className='flex flex-col justify-center items-center mobile:py-8 laptop:py-0 mobile:h-max laptop:h-full'>

        <h1 className='text-white mobile:text-4xl laptop:text-5xl font-semibold mobile:mb-0 laptop:mb-10'>Zisan's GPT</h1>

        <div className='text-xl text-white font-normal py-5 mobile:w-full laptop:w-[850px] mobile:px-5 laptop:px-10 flex mobile:justify-center laptop:justify-start items-center gap-3'>
            <i className="fa-solid fa-align-left text-base"></i>
            <h4 className='mobile:text-lg laptop:text-xl'>Examples</h4>
        </div>

        <div className='mobile:w-full laptop:w-[850px] mobile:px-5 laptop:px-10 grid mobile:grid-cols-1 laptop:grid-cols-3 gap-5'>
            {
                exampleQuestions.map((item, i) => (
                    <button onClick={() => handleExample(item.ques)} key={i} className='col-span-1 rounded-md bg-slate-700 text-center p-4 text-slate-300 hover:bg-zinc-900 h-max'>
                        {item.ques} <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </button>
                ))
            }
        </div>

    </div>
  )
}

export default Hero
