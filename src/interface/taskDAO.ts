interface tasksDAO <data>
{
  create(data:data):void;
  get(id):void;
  getAll():void;
  remove(id):void;
  update(data,id):void;
};

export default tasksDAO;