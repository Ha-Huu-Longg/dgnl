import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteToCart, minusToCart } from '../redux/action/action';

function Cart() {

    const cart = useSelector(state => state.cart)
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch()

    let totalPrice = 0

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {

                            const product = productList.find((e) => e.id == item.id)
                            totalPrice += product.price * item.quantity

                            return (
                                <tr key={cart.id}>
                                    <td>{product.id}</td>
                                    <td>
                                        <img width={150} src={product.image} alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button onClick={() => dispatch(minusToCart({ id: product.id }))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(addToCart({ id: product.id }))}>+</button>
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(deleteToCart({ id: product.id }))}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div>
                <p>total Price: {totalPrice}</p>
            </div>
        </>
    )
}

export default Cart