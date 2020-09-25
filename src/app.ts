import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';
import { config } from './config/config';

const app = express();
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = config.PORT;
const isProduction =  config.ENV === 'production';
// handling 404 error
app.use((req: Request, res: Response, next: NextFunction) => {
  let err = new Error('404 Not found') as TError;
  err.status = 404;
  next(err);
});
if(!isProduction) {
  app.use((err: TError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}
else {
  app.use((err: TError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: {}
    });
  });
}
const server = app.listen(port, () => {
    console.log(`Application running in ${port}`);
});
process.on('SIGTERM', () =>{
  server.close(() => {
    console.log('Server Closed');
    process.exit(0);
  });
});