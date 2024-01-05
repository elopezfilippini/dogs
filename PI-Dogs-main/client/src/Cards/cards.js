import Card from "../Card/card.js"
import "./cards.css"
function Cards (props){
    const perros = props.dogs
    return (<div  class="ampa"> 
            {perros.map((perro) =>(
      
         <Card
            key={perro.id}
            id={perro.id}
            name={perro.name}
            height={perro.height}
            width={perro.width}
            lifespan={perro.lifespan}
            image={perro.reference_image_id} 
            onClose={props.onClose}
            />
   ))}
        
        
           </div>


)}

export default Cards