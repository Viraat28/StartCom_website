import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

class UserRepository {
   async createuser(userData) {
    const salt=await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(userData.password,salt)
    userData.password=hashedPass
    const newUser=new UserModel(userData)
    const user=await newUser.save()
    return user;
  }
   finduser(username){
    return UserModel.findOne({username})
  }
}

export default UserRepository;
