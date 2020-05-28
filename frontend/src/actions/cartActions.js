import Axios from "axios";
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispatch) => {
    console.log("dispatched")
    try {
        const {data} = await Axios.get("/api/products/"+ productId);
        console.log("got data ", data._id);
        dispatch({
            type: CART_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }});
        console.log("cart action "+data.image);
    } catch (error) {
        
    }
}
const removeFromCart = (productId) => (dispatch) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
}
export {addToCart, removeFromCart};