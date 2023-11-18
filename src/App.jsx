import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from "./pages/Cart"
import Product from "./pages/Product"

function App() {

    return (
        <>

            <header style={{ marginBottom: 30 }}>
                <nav>
                    <Link to={"/"}>Product</Link>
                    <br />
                    <Link to={"/cart"}>Cart</Link>
                </nav>
            </header>

            <Routes>
                <Route path='/'>
                    <Route index element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
