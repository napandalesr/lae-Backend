import * as express from 'express'
import cors from 'cors'
import userController from "../controller/userController";

class Router{
  constructor(server: express.Express) {
    const router = express.Router();

    router.get('/', async(req: express.Request, res: express.Response) => {
      res.send('prueba')
    });

    router.get('/users', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().index());
    });

    router.post('/users', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().create(req.body));
    });

    router.get('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().show(req.params.id));
    });

    router.put('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().show(req.params.id));
    });

    router.delete('/users/:id', async(req: express.Request, res: express.Response) => {
      res.json(await new userController().destroy(req.params.id));
    });

    router.options('*', cors());
    server.use('/api/', router);
  }
};

export default Router;