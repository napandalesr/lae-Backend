interface authDAO <data>
{
  login(data:data):void;
  register(data:data):void;
  logout(id):void;
};

export default authDAO;