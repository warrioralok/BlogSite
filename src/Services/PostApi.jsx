import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const updateApi = async () =>{
    return await api.get('/posts')
}