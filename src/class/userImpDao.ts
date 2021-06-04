import usersDAO from "../dao/usersDAO";
import user from "../interface/user";


import collection from "../databases/collection";

class userImpDao implements usersDAO
{
  private objColletion;
  constructor(){
    this.objColletion=new collection();
  }
  create (user:user):void{
    this.objColletion.create('Users',user)
  }
}

export default userImpDao;