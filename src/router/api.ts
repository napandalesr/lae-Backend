import * as express from 'express'
import cors from 'cors'

import RouterUser from "./user";
import RouterAuth from "./auth";
import RouterTask from "./task";

class Router{
  private router;
  constructor(server: express.Express) {
    this.router = express.Router();
    this.router.use(new RouterUser().routes());
    this.router.use(new RouterAuth().routes());
    this.router.use(new RouterTask().routes());
    server.use('/api/',  this.router);
  }
};

export default Router;