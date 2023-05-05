import * as chatApi from '../API/ChatRequests';


export const createChat = async (id, userId) => {
    // dispatch({type: "FOLLOW_USER", data: id})
    // dispatch({type: "FOLLOWER_USER", data: id})
    await chatApi.createChat({senderId:id, receiverId:userId})
}