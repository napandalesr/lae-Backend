class userValidation
{
  create=(data)=>{
    const {name,lastName, email, password} = data;

    if(name === undefined){
      return 'Ingrese el campo name';
    }
    if(lastName === undefined){
      return 'Ingrese el campo lastName';
    }
    if(email === undefined){
      return 'Ingrese el campo email';
    }

    if(password.length<6){
      return 'La contraseña debe ser mayor de 6 dígitos';
    }
    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
      return 'El email no es válido';
    }

    return 'ok';
  }
}

export default userValidation;