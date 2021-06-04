import * as express from 'express'
import cors from 'cors'
import userImpDao from "../class/userImpDao";
import user from "../interface/user";

class Router implements user{
  name
  lastName
  email
  constructor(server: express.Express) {
    const router = express.Router();

    router.get('/', (req: express.Request, res: express.Response) => {
      res.json({message:'Hello worl'});
    });

    router.get('/users', (req: express.Request, res: express.Response) => {
      this.name="Neider"
      this.lastName='Renteria'
      this.email='no'
      const data:user={
        name:"Neider",
        lastName:'Renteria',
        email:'no'
      }
      const s= new userImpDao()
      s.create(data);
      res.json({message:0});
    });

    router.post('/users', (req: express.Request, res: express.Response) => {
      res.json({message:'Users'});
    });

    router.get('/users/:id', (req: express.Request, res: express.Response) => {
      res.json({message:'Users'+req.params.id});
    });

    router.put('/users/:id', (req: express.Request, res: express.Response) => {
      res.json({message:'Users'+req.params.id});
    });

    router.options('*', cors());
    server.use('/api/', router);
  }
};

export default Router;