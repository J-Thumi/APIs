import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useParams ,useNavigate} from 'react-router-dom';
import styles from './Word.module.css'

const Word = () => {
    
const[meaning,setMeaning]=useState()
const {word}=useParams()

const navigate=useNavigate()
const handleBack=()=>{
    navigate('/')
}

useEffect(()=>{

  axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then(res=>{
setMeaning(res.data[0].meanings)
console.log(res.data[0])

})
 .catch(err=>{
  console.log(err)
 })
},[])
  return (
    <div>
       <button onClick={handleBack} className={styles.back}>back</button>
    {meaning ? meaning.map(meaning=>{
      return <p key={uuidv4()}>
        
       <strong>{meaning.partOfSpeech + ": "}</strong> 
        {meaning.definitions[0].definition}</p>
    }) :<p>Loading...</p> }
    {/* the above ternary operator is important since the page might load and the data is not yet fetched so if not yet the null is returned

    Description. UUID. js is a JavaScript/ECMAScript library to generate RFC 9562 compliant Universally Unique IDentifiers (UUIDs). This library supports UUIDv4 (random number-based UUIDs), UUIDv1 (Gregorian time-based UUIDs), and UUIDv6 (Reordered Gregorian time-based UUIDs).

    npm install uuid

    useParams is used to pass parameters in the url
     */}

    </div>
  )
}

export default Word
