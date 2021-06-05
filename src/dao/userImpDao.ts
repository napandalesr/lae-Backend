import usersDAO from "../interface/usersDAO";
import user from "../class/user";

import collection from "../databases/collection";

class  userImpDao implements usersDAO<user>
{
  private objColletion;
  constructor(){
    this.objColletion=new collection();
  }
  create=async(data)=>{
    const response =await this.objColletion.create('Users',data);
    return response;
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