import {useState} from 'react'
import Button from './Button.jsx'
export default function Li({onset,obj,setBookArr,bookArr}) {
  const [book,setBook] = useState(false)
function boo() {
  setBook(i => !i)
if(!book){
    if(bookArr.some(x => x.id === obj.id)) setBookArr(i => [...i])
 else setBookArr(i => [...i,obj])
  alert(`You have successfully booked ${obj.title} to your bookmarks....Check bookmarks to see results`);
}
  if(book){
    const item = bookArr.filter(x => x.id !== obj.id)
    setBookArr(item)
alert(`You have successfully unbooked ${obj.title} from your bookmarks`);
  }
}
if(bookArr.some(x => x.id === obj.id)) obj.bookmark = true
  obj.bookmark = book
  const [serve,setServe] = useState(obj.servings)
  function increase() {
  setServe(i => i + 1) 
}
function decrease(){
if(serve > 1)setServe(i => i - 1)
}
  const img = obj.image_url.replace('http','https')
 const style={
  backgroundImage: `linear-gradient(to top, #f1d4b1, rgba(0,0,0,.2)),url(${img})`,
   backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition:'center',
   textAlign:'center',
  display:'flex',
   flexDirection:'column',
    alignItems:'center',
   justifyContent:'space-between',
  }
  

   return <div className="li-container">
   <Image style={style} onset={onset} obj={obj} />

    <Time boo={boo} book={book} obj={obj} increase={increase} decrease={decrease} serve={serve} />    
     
<Recipe>{obj.ingredients.map((ing,i) => <IngList obj={obj} serve={serve} key={i} ing={ing}/>)}</Recipe>

     
     <Preparation obj={obj} />
     </div>
}
function IngList({ing,serve,obj}){
const newQuan = ing.quantity * serve / obj.servings
return <li className="ing-li">
<span>🟫</span> <span>{newQuan === 0?'':newQuan.toFixed(2)}</span> <span>{ing.unit}</span> <span>{ing.description}</span>
</li>
}
function Preparation({obj}) {
   return <div className="cook">
<h1>HOW TO COOK IT</h1>
       <p className='cook-how'>This recipe was carefully designed and tested by <strong>{obj.publisher}</strong>. Please check out directions at their website.</p>
       <Button className="direction"><a className="direction" href={"#"+obj.source_url}>Directions</a></Button>
     </div>
}

function Time({obj,serve,decrease, increase,boo,book}) {
    return <div className="time-container">
<p className="time"><span>🕰️ </span><strong>{obj.cooking_time}</strong> MINUTES</p>
<p className="time"><span><Button className="time-but" page={decrease}>-</Button> </span> <strong>{serve}</strong> SERVINGS <span> <Button className="time-but" page={increase}>+</Button></span></p>
<Button page={boo} className="book-but">{!obj.bookmark?'🧾':'📜'}</Button>
    </div>  

}

function Image({style,onset,obj}) {
   return <div className="back" style={style} >
       <h1 className='cancel' onClick={onset}>X</h1>
       <div >
       <h1 className="obj-title">{obj.title}</h1>
       </div>
     </div >
}

function Recipe({children}) {
  return <div className="recipe">
<h1 className="rec-ing">RECIPE INGREDIENTS</h1>
<ul className="ing-ul">
  {children}
</ul>
  </div> 
}
