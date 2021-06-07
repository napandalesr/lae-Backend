class userValidation
{
  create=(data)=>{
    const {name} = data;

    if(name === undefined){
      return 'Ingrese el campo name';
    }

    return 'ok';
  }
}

export default userValidation;