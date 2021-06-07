import taskDAO from "../interface/taskDAO";
import taskClass from "../class/task";

import collection from "../databases/collection";

class  userImpDao implements taskDAO<taskClass>
{
  private objColletion;
  constructor(){
    this.objColletion=new collection();
  }
  create=async(data)=>{
    return await this.objColletion.create('Task',data, 'Tarea ');    
  }
  
  get=async(id)=>{
    const response =await this.objColletion.get('Task',id, 'Tarea ');
    return response;
  }

  getAll = async()=>{
    const response =await this.objColletion.getAll('Task');
    return response;
  }

  remove = async(id)=>{
    const response =await this.objColletion.delete('Task',id);
    return response;
  }

  update = async(data,id)=>{
    console.log(data);
    
    const response =await this.objColletion.update('Task',data,id);
    return response;
  }
}

export default userImpDao;