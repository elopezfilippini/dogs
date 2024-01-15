import {ADD,REMOVE,SEARCH,TEMPS,ORDER,ORDERW,FILTER,FILTERORIGIN} from "./Action-type"
const initialState={dogs:[],temps:[],allDogs:[]}
export const dogsReducer = function(state=initialState,action)
{  console.log('Estado antes de la acción:', state);
console.log('Acción:', action); switch(action.type){

    case ADD:{return{
        ...state,dogs:action.payload,allDogs:action.payload
    }}
    case SEARCH:{return{
        ...state,dogs:action.payload
    }}
    case TEMPS:{return{ ...state,temps:action.payload
    }}
    case ORDER:{
        const ordercopy = [...state.dogs]; 
        if (action.payload === "A") {
            ordercopy.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (action.payload === "D") {
            ordercopy.sort((a, b) => b.name.localeCompare(a.name));
        }
        return {...state,dogs:ordercopy} }
    case ORDERW:{
            const ordercopy = [...state.dogs]; 
    
            if(action.payload==="A" ) ordercopy.sort((a,b)=> a.weightMax-b.weightMax)
            if(action.payload==="D" ) ordercopy.sort((a,b)=> b.weightMax-a.weightMax) 
          
            return {...state,dogs:ordercopy} }
    case FILTER:{
       
        const perrosFiltrados = state.allDogs.filter((perro)=>  perro.temperamentlist.includes(" " + action.payload) || perro.temperamentlist.includes(action.payload))
        if (action.payload === "All") return { ...state,dogs:state.allDogs}

        else return{ ...state,dogs:perrosFiltrados
        }}

        case FILTERORIGIN:{
       
            const perrosFiltrados = state.allDogs.filter((perro)=>  perro.Origin.includes(action.payload))
            if (action.payload === "All") return { ...state,dogs:state.allDogs}
    
            else return{ ...state,dogs:perrosFiltrados
            }}



    default:
        return state    

}







}