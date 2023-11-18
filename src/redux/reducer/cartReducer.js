import { ADD, DELETE, MINUS } from "../const/const"

const productList = JSON.parse(localStorage.getItem("listProduct") || [])

const initialState = {
    cart: [],
    productList
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const index = state.cart.findIndex((item => item.id == action.payload.id))
            if (index == -1) {
                return {
                    ...state,
                    cart: [...state.cart, { id: action.payload.id, quantity: 1 }]
                }
            } else {
                const newCart = [...state.cart]
                const indexProduct = state.productList.findIndex((item) => item.id == action.payload.id)
                if (newCart[index].quantity + 1 <= state.productList[indexProduct].stock) {
                    newCart[index].quantity += 1
                    return {
                        ...state,
                        cart: [...newCart]
                    }
                } else {
                    alert("ban da them qua so luong");
                    return {
                        ...state
                    }
                }
            }
        case MINUS:
            const indexMinus = state.cart.findIndex((item => item.id == action.payload.id))
            const newCart = [...state.cart]
            if (newCart[indexMinus].quantity - 1 >= 1) {
                newCart[indexMinus].quantity -= 1
                return {
                    ...state,
                    cart: [...newCart]
                }
            } else {
                alert("ban ko the tru them");
                return {
                    ...state
                }
            }

        case DELETE:
            const newCartDelete = state.cart.filter(item => item.id != action.payload.id)
            return {
                ...state,
                cart: [...newCartDelete]
            }

    }
}

export default cartReducer