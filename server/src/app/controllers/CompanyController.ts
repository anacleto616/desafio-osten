import { Request, Response } from 'express';
import CompaniesRepository from '../repositories/CompaniesRepository';
import { CompanyType } from '../types/CompanyType';

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

  async store(request: Request, response: Response) {
    const { name, address: [{ street_name, number, district, city, state }] }: CompanyType = request.body;

    await CompaniesRepository.create({ name, address: [{ street_name, number, district, city, state }] });

    response.status(200).json({message: 'Company created successfully.'});
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, address: [{ street_name, number, district, city, state }] }: CompanyType = request.body;

    const companyExists = await CompaniesRepository.findById(id);

    if (!companyExists) {
      return response.status(404).json({ error: 'Company not found.' });
    }

    await CompaniesRepository.update(id, { name, address: [{ street_name, number, district, city, state }] });

    response.status(200).json({message: 'Company updated successfully.'});
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await CompaniesRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new CompanyController();
