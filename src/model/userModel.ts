import user from "../class/user";

class userModel
{
  name:string
  lastName:string
  email:string
  constructor(user:user){
    this.name=user.name;
    this.lastName=user.lastName;
    this.email=user.email;
  }

  callback=()=>{
    return {
      name:this.name,
      lastName:this.lastName,
      email:this.email
    }
  }
}

export default userModel;