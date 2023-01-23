import { loading_failure, loading_request, loading_success } from "./actiontypes"
import axios from "axios"



export const getloading=()=>{
    return {type:loading_request}
}
export const getdata=(payload)=>{
 return { type:loading_success, payload}
}

export const geterror=()=>{
    return {type:loading_failure}
}





export const Fetchdata=(param)=>(dispatch)=>{
dispatch(getloading())
axios.get("http://localhost:8080/Products",param).then((res)=>{
    // console.log(res)
    dispatch(getdata(res.data))
})
.catch((err)=>{dispatch(geterror())})
}



