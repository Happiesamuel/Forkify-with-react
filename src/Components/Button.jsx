export default function Button({children,page,className}) {
   return <button className={className} onClick={page} >{children}</button>
}
