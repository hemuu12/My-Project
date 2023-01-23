import React from 'react'

function arr(n){
return new Array(n).fill(0)
}


const Pagination = ({current , totalpages, Onchange}) => {

let pages=arr(totalpages).map((e,i)=>(
    <button style={{border:"1px solid black",padding:"5px",marginLeft:"15px"}} disabled={current=== i+1} onClick={()=>Onchange(i+1)}>{i+1}</button>
))



  return (
    <>
        <div >
            {pages}
        </div>
        <h1>Totalpage:-{totalpages}</h1>
    </>
   
  )
}

export default Pagination
