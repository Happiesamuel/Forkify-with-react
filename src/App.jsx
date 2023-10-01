import './App.css'
import Header from './Components/Header.jsx';
import ListMenu  from './Components/ListMenu.jsx';
import Li from './Components/Li.jsx'
import {useState,useEffect} from 'react'
export default function App() {
 const API = 'https://forkify-api.herokuapp.com/api/v2/recipes'
  const KEY = 'a742500b-e74e-4aa3-9c2d-a89a6371d76b'
const [query,setQuery] = useState('')
const [arrResult,setArrResult] = useState([])
const [error,setErr] = useState('')
const [count,setCount] = useState(1)
  const [load,setLoad] = useState(false)
  const [hash,setHash] = useState(null)
  const [obj,setObj] = useState({})
 const [open,setOpen] = useState(true)
const [showBook,setShowBook] = useState(false)
  const [bookArr,setBookArr] = useState([])
  function setting() {
   setShowBook(i => !i)  
  }
  
  function onset() {
    setOpen(i=> !i) 
    setHash(null)
  }

  
  useEffect(function() {
     async function getJson(url) {
     try {
       setErr('')
       setLoad(true)
       setShowBook(false)
        const res = await fetch(url)
       if(!res.ok)throw new Error('check your network connection 💥')
       const data = await res.json()
       if(data.data.recipes.length === 0)throw new Error('Recipe not found...Search again')
setArrResult(data.data.recipes);
setCount(1)
     } catch (err) {
       setErr(err.message)
       setCount(1)
       setArrResult([])
     }finally{
setLoad(false)
       setCount(1)
       setOpen(true)
     }
        
     }
    if(!query)return
     getJson(`${API}?search=${query}&key=${KEY}`)
  },[query])
  function setGetValue(val) {
  setQuery(val)
  }
  const eve = ['hashchange','load']
    eve.forEach(x => window.addEventListener(x, function (){
  const id = window.location.hash.slice(1)
  setHash(id)
         }))
useEffect (function() {
     async function getJson(url) {
    try {
    const res = await fetch(url)
      if(!res.ok)throw new Error('check your hhb connection 💥💥💥')
     const data = await res.json()   
       setObj({...data.data.recipe})
  } catch (err) {
     console.log(err);
    }
       finally{
setOpen(false)
       }
      }
  if(!hash) return 
getJson(`${API}/${hash}?key=${KEY}`)
  },[hash])


  return <div>
<Header setting={setting} arrResult={!showBook?arrResult:bookArr} setGetValue={setGetValue}/>
    {open && !showBook?<ListMenu onset={onset} load={load} error={error} count={count} setCount={setCount} arrResult={arrResult}>🙃Start by searching for a recipe or an ingredient. Have fun!</ListMenu> : showBook?  <ListMenu onset={setting} load={load} error={error} count={count} setCount={setCount} arrResult={bookArr}> You haven't booked any recipe... Search a recipe and book them 😉 </ListMenu>: <Li onset={onset} obj={obj} setBookArr={setBookArr} bookArr={bookArr} setObj={setObj} /> } 
    </div>
}

