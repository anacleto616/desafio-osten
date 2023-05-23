import prisma from '../libraries/prisma';
import { CompanyType } from '../types/CompanyType';

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

  async findByName(name: string) {
    const row = await prisma.company.findUnique({
      where: { name }
    });

    return row;
  }

  async create({ name, address: [{street_name, number, district, city, state}] }: CompanyType) {
    const row = prisma.company.create({
      data: {
        name,
        address: {
          create: [{
            street_name,
            number,
            district,
            city,
            state
          },]
        }
      }
    });

    return row;
  }

  async update(id: string, { name, address: [{ street_name, number, district, city, state }] }: CompanyType) {
    const row = prisma.company.update({
      where: { id: Number(id) },
      data: {
        name,
        address: {
          update: [{
            where: { id: Number(id) },
            data: {
              street_name,
              number,
              district,
              city,
              state
            }
          },]
        }
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
