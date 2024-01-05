import "./card.css"
function card (props){
    
    return (<div class="card">
    <h1 className="card-name" style={{fontSize:"28px", maxWidth: "100%",color:"yellow"}}> 
    🐶{props.name}🐶</h1>
    <img className="dogimage" src={`https://cdn2.thedogapi.com/images/${props.image}.jpg`}/> 
<h3 className="card-id" style={{fontSize:"24px",color:"whitesmoke"}}> ID:{props.id}</h3>
<h3 className="card-name" onClick={()=>props.onClose(props.id)} style={{fontSize:"40px",color:"whitesmoke"}}>🪦</h3>

</div>

)}

export default card