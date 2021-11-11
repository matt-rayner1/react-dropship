import React, { useState, useEffect } from 'react'
import { Products, Navbar, Cart, AdminPanel} from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("");

    const fetchProductsCategory = async (category) => {
        const res = await fetch(`http://localhost:5000/products?category=${category}`)
        const data = await res.json();

        setProducts(data)
    }

    const fetchCart = async () => {
        const res = await fetch("http://localhost:5000/cart");
        const data = await res.json();

        setCart(data);
    }

    //CART FUNCTIONALITY
    const handleAddToCart = async (product, quantity) => {
        product.quantity = quantity
        const res = await fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        const data = res.json()

        setCart([...cart, data])
    }
    
    const handleUpdateCartQty = async (product, quantity) => {
        await fetch(`http://localhost:5000/cart/${product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: `{"quantity":${quantity}}`
        })

        fetchCart();
    }
    
    const handleRemoveFromCart = async (product) => {
        await fetch(`http://localhost:5000/cart/${product.id}`, {
            method: 'DELETE'
        })

        fetchCart();
    }

    const handleEmptyCart = async () => {
        for(let i = 0; i < cart.length; i++ ) {
            let id = cart[i].id
            await fetch(`http://localhost:5000/cart/${id}`, {
                method: 'DELETE'
            })
        }

        fetchCart();
    }

    useEffect(() => {
        fetchProductsCategory(category);
        fetchCart();
    }, [category]);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.length} setCategory={setCategory}/>
                <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
                    <Route exact path="/cart" element={<Cart 
                                                            cart={cart}
                                                            handleUpdateCartQty={handleUpdateCartQty}
                                                            handleRemoveFromCart={handleRemoveFromCart}
                                                            handleEmptyCart={handleEmptyCart}
                                                            fetchCart={fetchCart}
                                                        />} />
                    <Route exact path="/adminPanel" element={<AdminPanel />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
