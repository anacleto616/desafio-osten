import prisma from '../libraries/prisma';

class CompaniesRepository {
  async findAll() {
    const row = await prisma.company.findMany();

    return row;
  }

  async findById(id: string) {
    const row = await prisma.company.findUnique({
      where: { id: Number(id) }
    });

    return row;
  }
}

export default new CompaniesRepository();
