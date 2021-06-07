
import authImpDao from "../dao/authImpDao";
import authClass from "../class/auth";
import authModel from "../model/authModel";

class userController
{

  create=async(data)=>{
    const model=new authModel(new authClass(data.email,data.password)).callback();
    const use= new authImpDao();
    return await use.register(model);
  }

  login=async(data)=>{
    const model=new authModel(new authClass(data.email,data.password)).callback();
    const use= new authImpDao();
    return await use.login(model);
  }
}

export default userController;