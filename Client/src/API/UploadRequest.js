import axios from 'axios'

const API=axios.create({baseURL:"https://startcomserver.azurewebsites.net/"})

export const uploadImage=(data)=>API.post('/upload',data)
export const uploadPost=(data)=>API.post('/posts',data)