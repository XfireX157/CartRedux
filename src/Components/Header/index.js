import {Link} from 'react-router-dom'

export default function Header() {
    return(
        <div>
            <div>
                <Link to="/add">cadastrar produto</Link>
                
            </div>
            <div>
                <Link to="/cart">Carrinho</Link><span>0</span>
            </div>
        </div>
    )
}