import './card.css';

interface CardProps {
    name: string,
    image: string,
    price: number
}

export function Card({ name, image, price } : CardProps){
    return <div className="card">
        <img src={image} alt="Imagem da comida" />
        <h2>{name}</h2>
        <p><b>Preço: </b>R$ {price}</p>
    </div>
}

export default Card;