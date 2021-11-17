/* eslint-disable */ 
import * as api from '../api';

// Action Developer
export const getProducts  = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)        
    }    
}