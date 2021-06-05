import message from "../const/message";
import response from "../const/response";

import {conexion} from "../databases/conexion";

class collection 
{
  private firestore;
  constructor(){
    this.firestore=new conexion();
  }
  create=async(nameCollection,data)=>{
    let respons=await this.firestore.initial()
    .firestore()
    .collection(nameCollection)
    .add(data)
    .then((docRef) => {
      return new response().succes('Usuario '+message.CREATE, docRef.id);
    })
    .catch((error) => {
      return new response().failedDatabase(message.ACCESS_DENIED+' - '+error);
    });
    return respons;
  };

  get=async(nameCollection,id)=>{
    var docRef = await this.firestore.initial()
    .firestore().collection(nameCollection).doc(id);
    let respons=docRef.get().then((doc) => {
      if (doc.exists) {
        return new response().succes(doc.data(),doc.id);
      } else {
        return new response().failedDatabase('Usuario '+message.NOT_FOUNT);
      }
    }).catch((error) => {
      return new response().failedDatabase(message.ACCESS_DENIED+' - '+error);
    });

    return respons;
  }

  getAll=async(nameCollection)=>{
    let respons=await this.firestore.initial()
    .firestore().collection(nameCollection).get().then(async(querySnapshot) => {
      let array=[];
      await querySnapshot.forEach((doc) => {
        array.push(doc.data());
      });
      return array;
    })
    return respons;
  }

  delete=async(nameCollection,id)=>{
    let respons=await this.firestore.initial()
    .firestore().collection(nameCollection).doc(id).delete().then(() => {
      return new response().succes(message.DELETE,id);
    }).catch((error) => {
      return new response().failed(message.NO_DELETE+' - '+error);
    });
    return respons;
  }

  update=async(nameCollection,id)=>{
    let washingtonRef =await this.firestore.initial()
    .firestore().collection(nameCollection).doc(id);
    // Set the "capital" field of the city 'DC'
    let respons= washingtonRef.update({
      capital: true
    })
    .then(() => {
      return new response().succes(message.UPDATE,id);
    })
    .catch((error) => {
      return new response().failed(message.NO_DELETE+' - '+error);  
    });
  }
}

export default collection;