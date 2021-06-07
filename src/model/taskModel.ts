import taskClass from "../class/task";

class userModel
{
  name:string
  constructor(user:taskClass){
    this.name=user.name;
  }

  callback=()=>{
    return {
      name:this.name,
    }
  }
}

export default userModel;