import Button from './Button.jsx';
import {useState} from 'react'
export default function Header({setGetValue,arrResult,setting}) {

   return <header>
<Logo />
 <Search setGetValue={setGetValue}/>
<Bookmark setting={setting} />
     <Result arrResult={arrResult}/>
   </header>
}
function Logo() {
   return <h1>🍴 Forkify 🍽️</h1>
}
function Search({setGetValue}) {
  const [val,setValue] = useState('')
function getVal(e) {
   e.preventDefault()
  setGetValue(val)
  setValue('')
}

   return <form onSubmit={getVal}>
   <input type="text" value={val} onChange={e => setValue(e.target.value)}/>
<Button >🔍 <span>SEARCH</span></Button>
   </form >
}
function Bookmark({setting}) {
   return <div onClick={setting} className="book">📔 Bookmark </div>
}

function Result({arrResult}) {
   return <p className="result"><strong>{arrResult.length}</strong> results</p>
}
