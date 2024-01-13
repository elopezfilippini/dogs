import  axios  from "axios"

import {ADD,REMOVE,SEARCH,TEMPS,ORDER,ORDERW,FILTER,FILTERORIGIN} from "./Action-type"

export const AddDog = function (name){
    return (dispatch)=>{
    axios.get(`http://localhost:3001/getDogs/?name=${name}`)
  .then(({data}) =>{ console.log(data)
    return dispatch ({
    type: SEARCH,
    payload:data
  })

})

}
}

export const AddAllDogs = function (){
  return (dispatch)=>{
  axios.get(`http://localhost:3001/getAllDogs/`)
.then(({data}) =>{ console.log(data)
  return  dispatch({
  type: ADD,
  payload:data
})

})

}
}


export const getTemps = function (){
  return (dispatch)=>{
  axios.get(`http://localhost:3001/getTemps/`)
.then(({data}) =>{ console.log(data)
  return  dispatch({
  type: TEMPS,
  payload:data
})

})

}
}

export function filterDogs(Temperament) {
  return {
    type: FILTER,
    payload: Temperament
  }
}

export function filtroOrigin(filtro) {
  return {
    type: FILTERORIGIN,
    payload: filtro
  }
}

export function OrderDog(order) {
  return {
    type: ORDER,
    payload: order
  }
}
export function OrderDogW(order) {
  return {
    type: ORDERW,
    payload: order
  }
}





export const NewDog = function (postDog){
  
console.log(postDog)
  axios.get(`http://localhost:3001/postDog`,postDog)
.then(({data}) =>{ console.log(data)
  // return dispatch ({
  // type: SEARCH,
  // payload:data


})

}



