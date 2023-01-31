import React, { useContext } from 'react'
import { Context } from '../../../App'

const Chat = () => {

  const { chat, temp } = useContext(Context)

  return (
    <div className='w-full flex flex-col items-center h-max'>

        {
          chat.map((item, i) => (
            <div className='w-full flex flex-col items-center' key={i}>
              <div className='mobile:w-full laptop:w-[850px] mobile:py-4 laptop:py-6 mobile:text-base laptop:text-[16px] font-light leading-8 flex mobile:gap-4 laptop:gap-7 items-center mobile:px-5 laptop:px-0'>
                  <img src={"./user.png"} alt="Zisan's GPT" className='mobile:w-8 laptop:w-10 mobile:h-8 laptop:h-10 rounded-md'/>
                  <h6 className='font-normal'>{item?.ques}</h6>
              </div>

              {
                chat.length - 1 === i ? 
                <div className='py-6 bg-slate-700 w-full flex justify-center mobile:px-5 laptop:px-0'>
                  <div className='mobile:w-full laptop:w-[850px] flex mobile:gap-4 laptop:gap-7'>
                      <img src={"./logo.png"} alt="Zisan's GPT" className='mobile:w-8 laptop:w-10 mobile:h-8 laptop:h-10 rounded-md'/>
                      <p className=' mobile:text-base laptop:text-[16px] font-light leading-8 h-max'>
                        {`${temp}`}
                      </p>
                  </div>
                </div>
                :
                <div className='py-6 bg-slate-700 w-full flex justify-center mobile:px-5 laptop:px-0'>
                  <div className='mobile:w-full laptop:w-[850px] flex mobile:gap-4 laptop:gap-7'>
                      <img src={"./logo.png"} alt="Zisan's GPT" className='mobile:w-8 laptop:w-10 mobile:h-8 laptop:h-10 rounded-md'/>
                      <p className=' mobile:text-base laptop:text-[16px] font-light leading-8 h-max'>
                        {`${item.ans}`}
                      </p>
                  </div>
                </div>
              }
            </div>
          ))
        }

    </div>
  )
}

export default Chat
