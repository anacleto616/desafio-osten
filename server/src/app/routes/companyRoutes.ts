import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';

export const router = Router();

router.get('/companies', CompanyController.index);
router.get('/companies/:id', CompanyController.show);
router.post('/companies', CompanyController.store);
router.put('/companies/:id', CompanyController.update);
router.delete('/companies/:id', CompanyController.delete);
