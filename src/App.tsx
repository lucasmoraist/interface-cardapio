import Card from "./components/card/card";
import { useFooddata } from "./hooks/useFoodData";
import './app.css'
import { useState } from "react";
import { Modal } from "./components/modal/modal";

function App() {
  const { data } = useFooddata();
  const [isVisible, setIsVisible] = useState(false)

  const handleOpenModal = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {/* 
          .map -> irá pegar cada um dos objetos dentro do data e irá passar para o componente criado 
          data? -> é adicionado o ponto de interrogação para o programa entender que a api pode ou não retornar e adicionando a interrogação a sintaxe não apita erro
        */}
        {data?.map(foodData =>
          <Card key={foodData.id}
            name={foodData.name}
            image={foodData.image}
            price={foodData.price} />
        )}
      </div>
      <button onClick={handleOpenModal} className="btn-primary">Novo</button>
      
      <div>
        {isVisible && <Modal closeModal={handleOpenModal}/>}
      </div>
    </div>
  )
}

export default App;