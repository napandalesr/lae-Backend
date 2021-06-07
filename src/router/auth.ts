import * as express from 'express'
import cors from 'cors'
import authController from "../controller/authController";
import authValidation from "../validation/auth";

class RouterAuth{
  private router;
  constructor() {
    this.router = express.Router();
  }
  routes=()=>{
    this.router.post('/auth', async(req: express.Request, res: express.Response) => {
      const response=new authValidation().create(req.body);
      if(response!=='ok'){
        res.status(400).json({
          status:400,
          message:response
        });
      }else
      res.json(await new authController().login(req.body));
    });

    this.router.get('/auth', async(req: express.Request, res: express.Response) => {
      res.json({aja:'ok'});
    });
    this.router.options('*', cors());
    return this.router;
  }
};

export default RouterAuth;