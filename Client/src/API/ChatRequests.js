import axios from 'axios'


const API = axios.create({ baseURL: 'https://startcomserver.azurewebsites.net/' });

export const createChat = async (data) => await API.post('/chat/', data);

export const userChats = async (id) => await API.get(`/chat/${id}`);

export const findChat = async (firstId, secondId) => await API.get(`/chat/find/${firstId}/${secondId}`);