import Card from "../Card/card.js";
import { useSelector } from "react-redux";

import "./cards.css";

function Cards(props) {
  const perros = useSelector((state) => state.dogs);
  console.log(perros);
  return (
      <div className="ampa">
        {perros.map((perro) => (
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
      </div>)
        }
        
        export default Cards;