import React, { useEffect, useState, useRef, createContext } from 'react'
import { exampleQuestions } from './components/data/example'
import Main from './components/Main'
import RightbarSidebar from './components/Main/Chat/Sidebar'
import Sidebar from './components/Sidebar'

export const Context = createContext()

const App = () => { 

  const chatScroll = useRef()
  const [inputData, setInputData] = useState("")
  const [isChat, setIsChat] = useState(false)
  const [chat, setChat] = useState([])
  const [answer, setAnswer] = useState("")
  const [count, setCount] = useState(0)
  const [temp, setTemp] = useState("")
  const [timoutInterval, setTimeoutInterval] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  const handleInput = (e) => {
    e.preventDefault()
    setInputData(e.target.value)
  }

  const handleExample = (ques) => {
    setInputData(ques)
  }

  const sentMessage = (e) => {

    e.preventDefault()

    if(inputData !== ""){
      const data = exampleQuestions.filter((item) => {
        return item.ques === inputData
      })
  
      if(data.length === 1){
        setChat([...chat, {
          ques: data[0]?.ques,
          ans: data[0]?.ans
        }])
        setAnswer("")
        setTemp("")
        setCount(0)
        setTimeout(() => {
          setIsChat(true)
          setAnswer(data[0]?.ans)
        }, 1000)
        setInputData("")
      }else{
        setChat([...chat, {
          ques: inputData,
          ans: "Sorry, I don't have any answer to your question at this time. Zisan has taught me some limited information. He is trying to improve me to help you with good answers. For now, you can ask me the example questions provided. Thanks..."
        }])
        setAnswer("")
        setTemp("")
        setCount(0)
        setTimeout(() => {
          setIsChat(true)
          setAnswer("Sorry, I don't have any answer to your question at this time. Zisan has taught me some limited information. He is trying to improve me to help you with good answers. For now, you can ask me the example questions provided. Thanks...")
        }, 1000)
        setInputData("")
      }
    }
    
  }

  const sentMessageFromHistory = (value) => {
    if(value !== ""){
      const data = exampleQuestions.filter((item) => {
        return item.ques === value
      })
  
      if(data.length === 1){
        setChat([{
          ques: data[0]?.ques,
          ans: data[0]?.ans
        }])
        setAnswer("")
        setTemp("")
        setCount(0)
        setTimeout(() => {
          setIsChat(true)
          setAnswer(data[0]?.ans)
        }, 1000)
        setInputData("")
      }else{
        setChat([{
          ques: inputData,
          ans: "Sorry, I don't have any answer to your question at this time. Zisan has taught me with some limited information. He is trying to improve me to help you with good answers. For now, you can ask me the example questions provided. Thanks..."
        }])
        setAnswer("")
        setTemp("")
        setCount(0)
        setTimeout(() => {
          setIsChat(true)
          setAnswer("Sorry, I don't have any answer to your question at this time. Zisan has taught me with some limited information. He is trying to improve me to help you with good answers. For now, you can ask me the example questions provided. Thanks...")
        }, 1000)
        setInputData("")
      }
    }
  }

  const clearConversations = (e) => {
    e.preventDefault()
    setChat([])
    setIsChat(false)
  }

  useEffect(() => {

    if(isChat === true){
      if(timoutInterval){
        clearTimeout(timoutInterval)
      }
  
      if(count < answer.length){
        
        setTimeoutInterval(setTimeout(() => {
          setTemp(temp+answer.charAt(count));
          setCount(count+1)
        }, 20))
  
      }else{
         
      }
    }

    chatScroll?.current?.scrollTo(0, chatScroll?.current?.scrollHeight)
    
  }, [count, isChat, answer])

  return (
    <Context.Provider value={{ inputData, isChat, chatScroll, chat, temp, openModal, sidebar, setSidebar, setOpenModal,  handleInput, sentMessage, handleExample, clearConversations, sentMessageFromHistory }}>
      <div className='w-full h-screen grid mobile:grid-cols-1 tablet:grid-cols-4 laptop:grid-cols-6 desktop:grid-cols-7 relative overflow-hidden'>
        <Sidebar/>
        <Main/>
        {
          isChat ? <RightbarSidebar/> : ""
        }
      </div>
    </Context.Provider>
  )
}

export default App
