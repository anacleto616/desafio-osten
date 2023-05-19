import prisma from '../libraries/prisma';

class CompaniesRepository {
  async findAll() {
    const row = await prisma.company.findMany();

    return row;
  }
}

export default new CompaniesRepository();
