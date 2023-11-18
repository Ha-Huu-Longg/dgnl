import { ADD, DELETE, MINUS } from "../const/const"

export const addToCart = (payload) => {
    return {
        type: ADD,
        payload
    }
}

export const minusToCart = (payload) => {
    return {
        type: MINUS,
        payload
    }
}

export const deleteToCart = (payload) => {
    return {
        type: DELETE,
        payload
    }
}