import { PrismaClient } from '@prisma/client'; // initialize Prisma Client

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // IMG Article
  const img1 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/TB001KAN0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/TB001KAN0.png',
      gal_1_path: 'assets/article/TB001KAN1.png',
      gal_2_path: 'assets/article/TB001KAN2.png',
      gal_3_path: 'assets/article/TB001KAN3.png',
    },
  });

  const img2 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BN001KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BN002KNO0.png',
      gal_1_path: 'assets/article/BN002KNO1.png',
      gal_2_path: 'assets/article/BN002KNO2.png',
      gal_3_path: 'assets/article/BN002KNO3.png',
    },
  });

  const img3 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT003KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT003KNO0.png',
      gal_1_path: 'assets/article/BT003KNO1.png',
      gal_2_path: 'assets/article/BT003KNO2.png',
      gal_3_path: 'assets/article/BT003KNO3.png',
    },
  });

  const img4 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BN004KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BN004KNO0.png',
      gal_1_path: 'assets/article/BN004KNO1.png',
      gal_2_path: 'assets/article/BN004KNO2.png',
      gal_3_path: 'assets/article/BN004KNO3.png',
    },
  });

  // Articles
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
      galleryId: img1.id,
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
      galleryId: img2.id,
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
      galleryId: img3.id,
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
      galleryId: img4.id,
    },
  });

  console.log({ post1, post2, post3, post4 });
  console.log({ img1, img2, img3, img4 });
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
