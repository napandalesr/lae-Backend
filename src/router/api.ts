import * as express from 'express'
import cors from 'cors'

class Router {
  constructor(server: express.Express) {
    const router = express.Router();

    router.get('/', (req: express.Request, res: express.Response) => {
      res.json({message:'Hello worl'});
    });

    router.get('/users', (req: express.Request, res: express.Response) => {
      res.json({message:'Users'});
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