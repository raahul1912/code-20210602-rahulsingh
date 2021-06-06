import { Request, Response, Router } from 'express';
import PublicController from './public.controller';

// Init Router
const router = Router();

/**
 * calculate BMI
 * @route POST /bmi/public/api/v1/calculateBMI
 * @group Public - API related to Public routes
 * @returns {object} 200 - Ok
 * @returns {object} 422 - Un processable Entity
 * @returns {object} 500 - Internal server error
 *
 */
router.post('/calculateBMI', (req: Request, res: Response) => {
  PublicController.calculateBMI(req, res);
});

export default router;
