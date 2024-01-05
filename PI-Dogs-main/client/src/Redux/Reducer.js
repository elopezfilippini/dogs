import {ADD,REMOVE} from "./Action-type"
const initialState={dogs:[]}
export const dogsReducer = function(state=initialState,action)
{  console.log('Estado antes de la acción:', state);
console.log('Acción:', action); switch(action.type){

    case ADD:{return{
        ...state,dogs:[...state.dogs,action.payload]
    }}
    case REMOVE:{return{}}


    default:
        return state    

}







}