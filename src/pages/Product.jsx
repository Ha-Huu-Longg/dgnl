import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/action/action'

function Product() {

    const [listProduct, setListProduct] = useState(JSON.parse(localStorage.getItem("listProduct")) || [])
    const dispatch = useDispatch()

    return (
        <>
            <div style={{ display: "flex", gap: 30 }}>
                {
                    listProduct.map((product) => (
                        <div key={product.id}>
                            <div>
                                <img width={200} src={product.image} alt="" />
                            </div>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>{product.stock}</p>
                            </div>
                            <div>
                                <button onClick={() => dispatch(addToCart({ id: product.id }))}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Product