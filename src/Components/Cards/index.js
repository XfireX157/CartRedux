import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { CartAdd, CartRemove, AddQtd } from '../../Sotre/Reducers/Cart'

export default function Cards({titulo, price, url, id, children, qtd}) {

    const dispatch = useDispatch()
    const location = useLocation()
    
    function AddCar() {
        dispatch(CartAdd(id))
    }

    function Remove() {
        dispatch(CartRemove(id))
    }

    return(
        <div key={id}>
            <div>
                <img src={url} alt={titulo} />
            </div>
            <div>
                <span>{titulo}</span>
                <p>R$ {price}</p>
               {location.pathname === '/cart' ? ( 
                <>
                    <button onClick={Remove} type="button">{children}</button>
                    <button onClick={() => {
                        if(qtd > 1){
                            dispatch(AddQtd({id, qtd: - 1}))
                        }else {
                            dispatch(CartRemove(id))
                        }
                    }}>-</button>
                    <span>{(qtd)}</span>
                    <button onClick={() => dispatch(AddQtd({id, qtd: + 1}))}>+</button>
                </>
                ) : (<button onClick={AddCar} type="button">{children}</button>)}
            </div>
        </div>
    )
}