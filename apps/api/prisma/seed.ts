import { PrismaClient } from '@prisma/client'; // initialize Prisma Client

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Black Kanji Japan' },
    update: {},
    create: {
      title: 'Black Kanji Japan',
      description: 'Black t-shirt with Kanji',
      reference: 'TB001KAN',
      price: 21.5,
      stock: 20,
      published: true,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Black Noodles' },
    update: {},
    create: {
      title: 'Black Noodles',
      description: 'Black t-shirt with Noodles',
      reference: 'TB002NOO',
      price: 20,
      stock: 20,
      published: true,
    },
  });

  const post3 = await prisma.article.upsert({
    where: { title: 'Black Temple' },
    update: {},
    create: {
      title: 'Black Temple',
      description: 'Black t-shirt with Temple',
      reference: 'TB003TEM',
      price: 19,
      stock: 20,
      published: true,
    },
  });

  const post4 = await prisma.article.upsert({
    where: { title: 'Black Neko' },
    update: {},
    create: {
      title: 'Black Neko',
      description: 'Black t-shirt with Neko',
      reference: 'TB004NEK',
      price: 22,
      stock: 20,
      published: false,
    },
  });

  console.log({ post1, post2, post3, post4 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
