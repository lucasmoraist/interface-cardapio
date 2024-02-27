import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { Food } from "../../interface/Food";
import './modal.css'

export interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return <div>
        <label>{label}</label>
        <input value={value} onChange={e => updateValue(e.target.value)} />
    </div>
}

export interface ModalProps {
    closeModal(): void
}

export function Modal({ closeModal }: ModalProps) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess } = useFoodDataMutate();

    const handleSubmit = () => {
        const foodData: Food = {
            name,
            image,
            price
        }
        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return <div className="modal-overlay">
        <div className="modal-body">
            <h2>Cadastre um novo item ao cardápio</h2>
            <form className="input-container">
                <Input label="nome" value={name} updateValue={setName} />
                <Input label="image" value={image} updateValue={setImage} />
                <Input label="price" value={price} updateValue={setPrice} />
            </form>
            <button onClick={handleSubmit} className="btn-secondary">
                Postar
            </button>
        </div>
    </div>
}