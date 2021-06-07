import * as express from 'express'
import cors from 'cors'
import userController from "../controller/userController";
import userValidation from "../validation/users";

class RouterUser{
  private router;
  constructor() {
    this.router = express.Router();
  }
  routes=()=>{
    this.router.get('/', async(req: express.Request, res: express.Response) => {
      res.send('prueba')
    });

    this.router.get('/users', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().index());
    });

    this.router.post('/users',cors(corsOptions), async(req: express.Request, res: express.Response) => {
      const response=new userValidation().create(req.body);
      if(response!=='ok'){
        res.status(400).json({
          status:400,
          message:response
        });
      }else
      res.json(await new userController().create(req.body));
    });

    this.router.get('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().show(req.params.id));
    });

    this.router.put('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().show(req.params.id));
    });

    this.router.delete('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().destroy(req.params.id));
    });

    var corsOptions = {
      origin: '*',
    }

    this.router.options('*', cors());

    return this.router;
    }
};

export default RouterUser;