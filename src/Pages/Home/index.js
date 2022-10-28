import { useSelector } from "react-redux"
import Cards from '../../Components/Cards'
import {BsFillCartFill} from 'react-icons/bs'

export default function Home() {

    const list = useSelector(state => state.list)
    
    return(
        <div>
            {list.map((item) => <Cards key={item.id} {...item} children={<BsFillCartFill/>} /> )}
        </div>
    )
}