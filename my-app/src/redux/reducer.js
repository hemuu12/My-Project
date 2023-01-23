import { loading_failure, loading_request, loading_success } from "./actiontypes"

const initialstate={
    products:[],
    isloading:false,
    isError:false
}

export const reducer=(state=initialstate,{type,payload})=>{

    switch(type){

    case loading_request:{
        return {...state, isloading:true ,isError:true }
    }   
    case loading_success:{
        return {...state, isloading:false ,products:payload}
    }
    case loading_failure:{
        return {...state, isError:false }
    }

    default:{
        return state
    }
    }


}