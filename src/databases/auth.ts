import {conexion} from "../databases/conexion";

class auth
{
  private firestore;
  constructor(){
    this.firestore=new conexion();
  }

  authCreateUser=async(email,password)=>{
    let respons=await this.firestore.initial().auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return error;
    });
    return respons;
  }

  authUser=async(email,password)=>{
    let respons=await this.firestore.initial().auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      return error;
    });
    return respons;
  }
}

export default auth;