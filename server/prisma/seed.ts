import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  await prisma.company.deleteMany();
  await prisma.address.deleteMany();

  await Promise.all([
    prisma.company.create({
      data: {
        name: 'Papelaria',
        address: {
          create: [{
            street_name: 'Rua dos Alfeneiros',
            number: '777',
            district: 'São Miguel',
            city: 'São Paulo',
            state: 'SP',
          },]
        }
      }
    }),

    prisma.company.create({
      data: {
        name: 'Loja de chapéus',
        address: {
          create: [{
            street_name: 'Rua dos Magos',
            number: '888',
            district: 'São Pedro',
            city: 'Rio de Janeiro',
            state: 'RJ',
          },]
        }
      }
    }),

    prisma.company.create({
      data: {
        name: 'Velaria',
        address: {
          create: [{
            street_name: 'Rua da Luz',
            number: '12',
            district: 'São Rafael',
            city: 'Maringá',
            state: 'PR',
          },]
        }
      }
    }),

    prisma.company.create({
      data: {
        name: 'Super Tech',
        address: {
          create: [{
            street_name: 'Rua do Silício',
            number: '23',
            district: 'Penha',
            city: 'São Paulo',
            state: 'SP',
          },]
        }
      }
    }),

    prisma.company.create({
      data: {
        name: 'Smart Robots',
        address: {
          create: [{
            street_name: 'Rua dos Servidores',
            number: '123',
            district: 'São Bento',
            city: 'São Paulo',
            state: 'SP',
          },]
        }
      }
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (event) => {
    console.error(event);
    await prisma.$disconnect();
    process.exit(1);
  });
