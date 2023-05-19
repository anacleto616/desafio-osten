import { Request, Response } from 'express';
import CompaniesRepository from '../repositories/CompaniesRepository';

class CompanyController {
  async index(request: Request, response: Response): Promise<void>  {
    const companies = await CompaniesRepository.findAll();

    response.json(companies);
  }
}

export default new CompanyController();
