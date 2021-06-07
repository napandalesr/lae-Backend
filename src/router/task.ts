import * as express from 'express'
import cors from 'cors'
import taskController from "../controller/taskController";
import taskValidation from "../validation/task";

class RouterTask{
  private router;
  constructor() {
    this.router = express.Router();
  }
  routes=()=>{
    this.router.get('/task', cors(corsOptions), async(req: express.Request, res: express.Response) => {
      res.json(await new taskController().index());
    });

    this.router.post('/task',cors(corsOptions), async(req: express.Request, res: express.Response) => {
      const response=new taskValidation().create(req.body);
      if(response!=='ok'){
        res.status(400).json({
          status:400,
          message:response
        });
      }else
      res.json(await new taskController().create(req.body));
    });

    this.router.get('/task/:id', cors(corsOptions), async(req: express.Request, res: express.Response) => {
      res.json(await new taskController().show(req.params.id));
    });

    this.router.put('/task/:id', cors(corsOptions),async(req: express.Request, res: express.Response) => {
      res.json(await new taskController().update(req.body,req.params.id));
    });

    this.router.delete('/task/:id', cors(corsOptions),async(req: express.Request, res: express.Response) => {
      res.json(await new taskController().destroy(req.params.id));
    });

    var corsOptions = {
      origin: '*',
    }

    this.router.options('*', cors());

    return this.router;
    }
};

export default RouterTask;