import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';

export const router = Router();

router.get('/companies', CompanyController.index);
router.get('/companies/:id', CompanyController.show);
router.post('/companies');
router.put('/companies/:id');
router.delete('/companies/:id');
