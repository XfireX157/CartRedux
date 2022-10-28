import {useSelector} from 'react-redux'
import Cards from '../../Components/Cards'
import {BsTrashFill} from 'react-icons/bs'

export default function Cart() {
    
    const carrinho = useSelector(state => {
    let total = 0
    const cartItens = state.cart.reduce((itens, itensNoCarrinho) => {
        const list = state.list.find(item => item.id === itensNoCarrinho.id)
        total += (list.price * itensNoCarrinho.qtd)
        itens.push({
            ...list,
            qtd: itensNoCarrinho.qtd
        })
        return itens
    }, [])
        return {carrinho: cartItens, total}
    })


    return(
        <div>
            <div>
               {carrinho.carrinho.map((item) => <Cards key={item.id} {...item} children={<BsTrashFill/>} />)}
            </div>

            <span>SubTotal R${carrinho.total}</span>
        </div>
    )
}