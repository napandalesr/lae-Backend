class authValidation
{
  create=(data)=>{
    const {email, password} = data;

    if(password.length<6){
      return 'La contraseña debe ser mayor de 6 dígitos';
    }

    if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
      return 'El email no es válido';
    }

    return 'ok';
  }
}

export default authValidation;