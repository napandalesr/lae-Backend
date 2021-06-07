import usersDAO from "../interface/usersDAO";
import userClass from "../class/user";

import collection from "../databases/collection";
import auth from "../databases/auth";

class  userImpDao implements usersDAO<userClass>
{
  private objAuth;
  private objColletion;
  constructor(){
    this.objColletion=new collection();
    this.objAuth=new auth();
  }
  create=async(data)=>{
    const responseAuth= await this.objAuth.authCreateUser(data.callbackAuth.email,data.callbackAuth.password);
    if(responseAuth.code==="auth/email-already-in-use"){
      return {failed:'Usuario ya existe'};
    }
    const response =await this.objColletion.create('Users',data);    
    return {...responseAuth,response};
  }
  
  get=async(id)=>{
    const response =await this.objColletion.get('Users',id);
    return response;
  }

  getAll = async()=>{
    const response =await this.objColletion.getAll('Users');
    return response;
  }

  remove = async(id)=>{
    const response =await this.objColletion.delete('Users',id);
    return response;
  }

  update = async(data,id)=>{
    const response =await this.objColletion.delete('Users',data,id);
    return response;
  }

}

export default userImpDao;