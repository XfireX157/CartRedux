import { useDispatch } from "react-redux"
import { CartAdd } from '../../Sotre/Reducers/Cart'

export default function Cards({titulo, price, url, id, children}) {

    const dispatch = useDispatch()
    
    function AddCar() {
        dispatch(CartAdd(id))
    }

    return(
        <div key={id}>
            <div>
                <img src={url} alt={titulo} />
            </div>
            <div>
                <span>{titulo}</span>
                <p>R$ {price}</p>
                <button onClick={AddCar} type="button">{children}</button>
            </div>
        </div>
    )
}