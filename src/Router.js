import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Default from './Components/Default'
import Add from './Pages/Add'
import Cart from './Pages/Cart'
import Home from './Pages/Home'

export default function RouterDom() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Default />}>
                    <Route index element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
                <Route path='/add' element={<Add />} />
            </Routes>
        </Router>
    )
}