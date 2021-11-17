/* eslint-disable */ 
import axios from 'axios';

const url = 'http://localhost:5300/node/getProducts';

export const fetchProducts  = () => axios.get(url)