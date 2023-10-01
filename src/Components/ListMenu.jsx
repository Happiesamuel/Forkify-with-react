import Button from './Button.jsx';

export default function ListMenu({arrResult,count,setCount,error,load,onset, children}) {

const resultPerPage = 3
const pages = Math.ceil(arrResult.length / resultPerPage)
const start = count * resultPerPage - resultPerPage
const stop = count * resultPerPage
const sliceArr = arrResult.slice(start,stop)
  function decrease(){
    setCount(i => i - 1) 
  }
  function increase() {
    setCount(i => i + 1) 
  }
   return <div className="container">
     {arrResult.length === 0 && !error ? <p className="intro">{children}</p>: error.length > 0? <p className="intro">{error}</p>: load? <p className="intro">LOADING...</p> : <ul className="ul">
    {sliceArr.map(results => <List key={results.id} onset={onset} results={results} />)}
     </ul>
     }
     <div className="buts">
  {count > 1 && <Button page={decrease} className="but">⬅️ Page {count - 1}</Button>}
       {count < pages &&<Button page={increase} className="but">Page {count + 1} ➡️</Button>}
     </div>
       </div>
}
function List({results}) {
function a() {
  console.log(results.id); 
}
  
 return <li onClick={a} className="list">
 <a className="list_link" href={'#' + results.id}>
<img className="img" src={results.image_url.replace('http','https')} alt={results.publisher}/>
  <div className="content" >
  <h6 className="publisher">{results.publisher}</h6>
    <p className="title">{results.title}</p>
  </div >
   </a>
 </li >  
}

