import React, { useContext } from 'react'
import { Context } from '../../../App'
import { exampleQuestions } from '../../data/example'

const RightbarSidebar = () => {

    const { openModal, setOpenModal, handleExample } = useContext(Context)

  return (
    <div className={`h-[100vh] mobile:w-[220px] laptop:w-[300px] bg-transparent absolute top-0 ${openModal ? "right-0" : "mobile:-right-[220px] laptop:-right-[290px]"} flex items-center transition-all`}>

        <div className='w-full h-[90vh] rounded-md bg-zinc-900 p-2 relative' style={{boxShadow: "0px 0px 5px 0px #0f172a"}}>

            {
                exampleQuestions.map((item, i) => (
                    <button  onClick={() => {
                        handleExample(item.ques)
                        setOpenModal(false)
                    }} key={i} className='rounded-md text-white flex items-start flex-wrap p-3 w-full hover:bg-slate-800'>
                        <i className="fa-regular fa-circle-question w-8 text-left text-lg"></i>
                        <p className='text-left w-full flex-1 mt-1 font-light'>{item.ques}</p>
                    </button>
                ))
            }

            <button onClick={() => setOpenModal(!openModal)} className='text-white shadow-md p-2 rounded-full mobile:w-10 laptop:w-12 mobile:h-10 laptop:h-12 bg-zinc-900 absolute mobile:-left-12 laptop:-left-14 top-0 flex justify-center items-center' style={{boxShadow: "0px 0px 5px 0px #0f172a"}}>
                {
                    <i className={`fa-solid animate-pulse fa-chevron-${openModal ? "right" : "left"} mobile:text-lg laptop:text-2xl`}></i>
                }
            </button>
        </div>
    </div>
  )
}

export default RightbarSidebar
