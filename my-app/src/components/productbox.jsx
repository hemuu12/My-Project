


import React from 'react'

const Productbox = ({img,price,id,name,ram}) => {
  return (
    <>
        <div style={{padding:"5px",border:"1px solid black",textAlign:"center"}} key={id}>
                <div style={{marginLeft:"150px"}}>
                <img src={img} alt={name} width="150px" height="100px"/>
                </div>
                <h3 width={10}>{name}</h3>
                <span>Price  {price}₹</span>
                <h3>Ram-{ram}</h3>
    
        </div>

    </>
  )
}

export default Productbox