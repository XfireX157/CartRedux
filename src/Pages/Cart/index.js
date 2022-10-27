import {useSelector} from 'react-redux'
import Cards from '../../Components/Cards'


export default function Cart() {

    const cartItens = useSelector(state => {
   
        const carrinho = state.cart.filter(item => item.id === state.list.id)
        return carrinho
    })

    console.log(cartItens)

    return(
        <div>
            <div>
               {cartItens.map((item) => <Cards key={item.id} {...item} />)}
            </div>
        </div>
    )
}