import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {AddCar} from '../../Sotre/Reducers/list'

export default function Add() {

    // const [list, setList] = useState([])

    const dispatch = useDispatch()
    const [form, setForm] = useState({titulo: '', price: '', url: ''})
    
    const formChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // setList([...list, { titulo: form.titulo, price: form.price, url: form.url }])
        dispatch(AddCar(form))
        setForm({ titulo: '', price: '', url: ''})
    }

    return (
        <>

            <Link to='/'>voltar</Link>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>npme</label>
                        <input 
                            type="text" 
                            name="titulo" 
                            value={form.titulo} 
                            onChange={formChange}
                        />
                    </div>
                    <div>
                        <label>preço</label>
                        <input 
                            type="text" 
                            name="price" 
                            value={form.price}
                            onChange={formChange}
                        />
                    </div>
                    <div>
                        <label>url</label>
                        <input 
                            type="text" 
                            name="url" 
                            value={form.url}
                            onChange={formChange}
                        />
                    </div>

                    <input type="submit"/>
                </form>
            </div>

            {/* <div>
                {list.map((item, index) => (
                    <div key={index}>
                        <div>{item.titulo}</div>
                        <div>{item.price}</div>
                        <div>{item.url}</div>
                    </div>
                ))}
            </div> */}

        </>
    )
}