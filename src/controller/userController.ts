
import userImpDao from "../dao/userImpDao";
import userClass from "../class/user";
import userModel from "../model/userModel";

class userController
{
  index=async()=>{
    const use= new userImpDao();
    return await use.getAll();
  }

  create=async(data)=>{
    const model=new userModel(new userClass(data.name,data.lastName,data.email)).callback();
    const use= new userImpDao();
    return await use.create(model);
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