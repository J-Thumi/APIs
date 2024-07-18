import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Search.module.css'

const Search = () => {
    const navigate=useNavigate()
    const[word,setWord]=useState()
    const handleSearch=()=>{
        navigate(`/${word}`)
    }

  return (
    <div className={styles.whole}>
        <h1 className={styles.text}>What word do you want to know the meaning</h1>
        <div className={styles.box}>
        <input type="text" 
        onChange={(e)=>setWord(e.target.value)} className={styles.input}/>
        <button className={styles.Search} onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Search
