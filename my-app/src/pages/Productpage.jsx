import React, { useEffect, useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import Productbox from '../components/productbox'
import { Fetchdata } from '../redux/acion'
// import { useLocation, useSearchParams } from 'react-router-dom'
import Pagination from '../components/pagination'

const Productpage = () => {


const products=useSelector((store)=>store.productReducer.products)
const dispatch=useDispatch()


const [page, setPage]=useState(1)


useEffect(()=>{

let paraobj={
  params:{
    _limit:4,
    _page:page  
  }
}

dispatch(Fetchdata(paraobj))

},[page])



  return (
    <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
           {
            products && products.map((el)=>(
                <Productbox key={el.id}
                  img={el.img[0]}
                  price={el.price}
                  name={el.title}
                  ram={el.ram}
                />
            ))

           }
           
        </div>
            <div style={{marginTop:"15px",fontSize:"25px"}}>
                <Pagination current={page} totalpages={products?.length} Onchange={(page)=>setPage(page)}/>
            </div>

    </>
  )
}

export default Productpage
