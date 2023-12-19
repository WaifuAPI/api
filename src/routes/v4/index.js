import { Router } from 'express';
import factRoutes from './textUtilities/facts.js';

const router = Router();
/**
 * GET v1/docs
 */

router.use('/fact', factRoutes);

export default router;
