
import './App.css'
import Search from './components/Search'
import Word from './components/Word'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {


const names=['hello','john','how','are']

  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Search/>}/>
         <Route path='/:word' element={<Word/>}/>
    </Routes>
    </Router>
   
    </>
  )
}

export default App
