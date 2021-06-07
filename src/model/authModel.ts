import authClass from "../class/auth";

class userModel
{
  email:string
  password:string
  constructor(user:authClass){
    this.email=user.email;
    this.password=user.password;
  }

  callback=()=>{
    return {
      email:this.email,
      password:this.password,
    }
  }
}

export default userModel;