import prisma from '../libraries/prisma';

class CompaniesRepository {
  async findAll() {
    const row = await prisma.company.findMany({
      include: {
        address: { }
      }
    });

    return row;
  }

  async findById(id: string) {
    const row = await prisma.company.findUnique({
      where: { id: Number(id) },
      include: {
        address: { }
      }
    });

    return row;
  }

  async delete(id: string) {
    const deleteOp = await prisma.company.delete({
      where: { id: Number(id) }
    });

    return deleteOp;
  }
}

export default new CompaniesRepository();
