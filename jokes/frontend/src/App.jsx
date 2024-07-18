
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const[news,setNews]=useState()

  useEffect(()=>{
 axios.get('https://api.nasa.gov/planetary/apod?api_key=XDSrnzMCRFGiNUFnhU7lEdlPi0k0XXc59uJpYBCp')
 .then(res=>{
  setNews(res.data)
  console.log(res.data)
 })
},[])
  return (
    <>
      {news ? <div className='container'>
        <h1>{news.title}</h1>
        <h3>{news.copyright}</h3>
       <h5>{news.date}</h5> 
        <p>{news.explanation}</p>
        <img src={news.hdurl} alt="" />

      </div>:<p>loading</p> }
    </>
  )
}

export default App
