import { Request, Response } from 'express';
import CompaniesRepository from '../repositories/CompaniesRepository';

class CompanyController {
  async index(request: Request, response: Response): Promise<void>  {
    const companies = await CompaniesRepository.findAll();

    response.json(companies);
  }

  async show(request: Request, response: Response): Promise<void>  {
    const { id } = request.params;

    const company = await CompaniesRepository.findById(id);

    response.json(company);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await CompaniesRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new CompanyController();
