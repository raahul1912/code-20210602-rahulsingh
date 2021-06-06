import { Application } from 'express';
import publicRoutes from '../components/public';
/**
 * Init All routes here
 */
export default (app: Application) => {
  // Public routes
  app.use('/public/api/v1', publicRoutes);
};
