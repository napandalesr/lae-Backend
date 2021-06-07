class authValidation
{
  create=(data)=>{
    const {email, password} = data;

    if(password.length<6){
      return 'La contraseña debe ser mayor de 6 dígitos';
    }

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
      return 'El email no es válido';
    }

    return 'ok';
  }
}

export default authValidation;