import user from "../interface/user";

import {conexion} from "../databases/conexion";

class collection 
{
  private firestore;
  constructor(){
    this.firestore=new conexion();
  }
  create=async(nameCollection,user:user)=>{
  };

  delete=async(nameCollection,id)=>{

  }

  update=async(nameCollection,data,id)=>{

  }

  get=async(nameCollection,id)=>{

  }

  getAll=async(nameCollection)=>{

  }
}

export default collection;