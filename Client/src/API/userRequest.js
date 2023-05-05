import axios from "axios";

const API = axios.create({ baseURL: "https://startcomserver.azurewebsites.net/" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = async (userId) => await API.get(`/user/${userId}`);
export const updateUser = async (id, formData) =>  await API.put(`/user/${id}`, formData);

export const getAllUser = async ()=> await API.get('/user')
export const followUser = async (id,data)=> await API.put(`/user/${id}/follow`, data)
export const unfollowUser = async (id, data)=> await API.put(`/user/${id}/unfollow`, data)
export const deleteUser=async (id)=> await API.delete(`/user/${id}`)
