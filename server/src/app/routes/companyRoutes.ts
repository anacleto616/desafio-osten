import { Router } from 'express';

export const router = Router();

router.get('/companies');
router.get('/companies/:id');
router.post('/companies');
router.put('/companies/:id');
router.delete('/companies/:id');
