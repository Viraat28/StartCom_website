import ChatRepository from "../DDD/ChatRepository.js";

const ChatRepo = new ChatRepository();

export const createChat = async (req, res) => {
  const newChat = ChatRepo.create_chat(req.body)
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatRepo.user_chats(req.params)
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatRepo.find_chat(req.params);
    res.status(200).json(chat)
  } catch (error) {
    res.status(500).json(error)
  }
};