
import userImpDao from "../dao/userImpDao";
import userClass from "../class/user";
import authClass from "../class/auth";
import userModel from "../model/userModel";
import authModel from "../model/authModel";

class userController
{
  index=async()=>{
    const use= new userImpDao();
    return await use.getAll();
  }

  create=async(data)=>{
    const callbackAuth=new authModel(new authClass(data.email,data.password)).callback();
    const callback=new userModel(new userClass(data.name,data.lastName,data.email)).callback();
    const use= new userImpDao();
    return await use.create({...callback,callbackAuth});
  }

  show=async(id)=>{
    const use= new userImpDao();
    return await use.get(id);
  }

  update= async(data,id)=>{
    const model=new userModel(new userClass(data.name,data.lastName,data.email)).callback();
    const use= new userImpDao();
    return await use.update(model,id);
  }

  destroy= async(id)=>{
    const use= new userImpDao();
    return await use.remove(id);
  }
}

export default userController;