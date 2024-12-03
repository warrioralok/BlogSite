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

//add Data in API
export const postData = async (post) =>{
    return await api.post('/posts',post)
}

// PUT update data in API

export const updatedData = async (id,post) =>{
    return await api.put(`posts/${id}`,post);
}