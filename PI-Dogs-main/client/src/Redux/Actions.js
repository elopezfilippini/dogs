import  axios  from "axios"

import {ADD,REMOVE} from "./Action-type"

export const AddDog = function (id){
    return (dispatch)=>{
    axios.get(`http://localhost:3001/getDogs/${id}`)
  .then(({data}) =>{ console.log(data)
    return dispatch ({
    type: ADD,
    payload:data
  })

})

}
}