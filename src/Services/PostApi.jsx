import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
//get API
export const updateApi = async () =>{
    return await api.get('/posts')
}

//Delete API

export const deleteApi = async (id) => {
    return await api.delete(`/posts/${id}`);
};