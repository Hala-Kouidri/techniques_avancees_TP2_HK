import { useState } from 'react'

const AddItem = ({onAdd}) =>{
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [categorie, setCategorie] = useState('')
const [price, setPrice] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!name || !categorie || !description || !price){
        alert('Incomplet')
        return
    }
    
    onAdd({ name, description, categorie, price})
    setName('')
    setDescription('')
    setCategorie('')
    setPrice('')
}

    return(
        <form className="add-form d-flex mt-5" onSubmit={onSubmit}>
            
            <div className="input-group mb-3">

                <input 
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Nom"
                    value ={name}
                    onChange={(e) =>setName(e.target.value)}
                />
            
                <input 
                    className="form-control form-control-sm align-text-top"
                    type="text"
                    placeholder="Catégorie"
                    value ={categorie}
                    onChange={(e) =>setCategorie(e.target.value)}
                />

                <textarea 
                    className="form-control form-control-sm"
                    placeholder="Description"
                    value ={description}
                    onChange={(e) =>setDescription(e.target.value)}
                >
                </textarea>
            
                <input 
                    className="form-control form-control-sm"
                    type="number"
                    placeholder="Prix"
                    value ={price}
                    onChange={(e) =>setPrice(e.target.value)}
                />
                <input type="submit" className="btn btn-outline-primary" value="Ajouter"/>
            </div>
            
        </form>
    )
}

export default AddItem