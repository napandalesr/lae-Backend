import authDAO from "../interface/authDAO";
import authClass from "../class/auth";

import auth from "../databases/auth";

class  authImpDao implements authDAO<authClass>
{
  private objAuth;
  constructor(){
    this.objAuth=new auth();
  }

  login =async(data)=>{
    return this.objAuth.authUser(data.email,data.password);
  };

  register=async(data)=>{
    return this.objAuth.authCreateUser(data.email,data.password);
  };

  logout=()=>{};
}

export default authImpDao;