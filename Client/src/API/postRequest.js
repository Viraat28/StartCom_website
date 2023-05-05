import axios from 'axios'


const API = axios.create({ baseURL: 'https://startcomserver.azurewebsites.net/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts= async (id)=> await API.get(`posts/${id}/timeline`);
export const likePost= async (id, userId)=> await API.put(`posts/${id}/like`, {userId: userId})
export const deletePost= async (id, userId)=> await API.delete(`posts/${id}`, { data: {userId: userId} })