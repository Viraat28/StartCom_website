import ChatModel from "../Models/ChatModel.js";

class ChatRepository{
    async create_chat(data){
        const newChat = new ChatModel({
            members: [data.senderId, data.receiverId],
          });
          return newChat
    }
    async user_chats(data){
        const chat = await ChatModel.find({
            members: { $in: [data.userId] },
          });
          return chat;
    }
    async find_chat(data){
        const chat = await ChatModel.findOne({
            members: { $all: [data.firstId, data.secondId] },
          });
          return chat;
    }

}

export default ChatRepository;