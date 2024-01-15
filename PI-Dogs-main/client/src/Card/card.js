import "./card.css"
import { Link } from 'react-router-dom';
function card (props){
    
    return (<div class="card" style={{textDecoration:"none"}}>  <Link to={`/detail/${props.name}`} style={{ textDecoration: "none" }} >
    <h1 className="card-name" style={{fontSize:"28px", maxWidth: "100%",color:"yellow"}}> 
    🐶{props.name}🐶</h1>
    <img className="dogimage" src={`${props.image}`}/> 
<h3 className="card-id" style={{fontSize:"24px",color:"whitesmoke",textDecoration: "none"}}> ID:{props.id}</h3>
{/* <h3 className="card-id" style={{fontSize:"10px",color:"whitesmoke"}}> Peso: {props.weight.metric} kg</h3>
<h3 className="card-id" style={{fontSize:"10px",color:"whitesmoke"}}> Altura: {props.height.metric} cm</h3>
<h3 className="card-id" style={{fontSize:"10px",color:"whitesmoke"}}> Vida: {props.lifespan} </h3>
<h3 className="card-id" style={{fontSize:"10px",color:"whitesmoke"}}> Temperamento: {props.temperament} </h3> */}


</Link>

</div>

)}

export default card