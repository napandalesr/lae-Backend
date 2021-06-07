
import taskImpDao from "../dao/taskImpDao";
import taskClass from "../class/task";
import taskModel from "../model/taskModel";

class userController
{
  index=async()=>{
    const use= new taskImpDao();
    return await use.getAll();
  }

  create=async(data)=>{
    const callback=new taskModel(new taskClass(data.name)).callback();
    const use= new taskImpDao();
    return await use.create(callback);
  }

  show=async(id)=>{
    const use= new taskImpDao();
    return await use.get(id);
  }

  update= async(data,id)=>{
    const model=new taskModel(new taskClass(data.name)).callback();
    const use= new taskImpDao();
    return await use.update(model,id);
  }

  destroy= async(id)=>{
    const use= new taskImpDao();
    return await use.remove(id);
  }
}

export default userController;