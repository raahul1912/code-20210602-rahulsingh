import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import { Application } from 'express';

export default (app: Application) => {
  app.use(compression());
  app.use(json());
  app.use(urlencoded({ extended: true }));
};
