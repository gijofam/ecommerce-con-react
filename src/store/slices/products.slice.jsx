import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'productos',
    initialState: null,
    reducers : {
      setProducts : (state, action) => action.payload 
    }
})

export default productSlice.reducer
export const getAllProduct = () => (dispatch) => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(url)
            .then(res => dispatch(setProducts(res.data.data.products)))
            .catch(err => console.log(err))
}
export const { setProducts }= productSlice.actions