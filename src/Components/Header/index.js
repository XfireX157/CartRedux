import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Header() {

    const cart = useSelector(state => 
        state.cart.reduce((itens, itensNoCarrinho) => itens + itensNoCarrinho.qtd, 0)
    )

    return(
        <div>
            <div>
                <Link to="/add">cadastrar produto</Link>
                
            </div>
            <div>
                <Link to="/cart">Carrinho</Link><span>{cart}</span>
            </div>
        </div>
    )
}