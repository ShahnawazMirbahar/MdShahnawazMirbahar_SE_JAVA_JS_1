import axios from 'axios';

const url = 'http://localhost:3003/products';

export const getProducts = async(id)=>{
    id = id || '';
    return await axios.get(`${url}/${id}`); // if the url does not send id it will return to all data
                                             // if the url sends some data it will retun data to edit feild           
}

export const addProduct = async(product) =>{
    return await axios.post(url, product);
}

export const editProduct =async(id, product) =>{
    return await axios.put(`${url}/${id}`,product);
}

export const deleteProduct = async(id) =>{
    return await axios.delete(`${url}/${id}`);
}