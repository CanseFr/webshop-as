import { PrismaClient } from '@prisma/client'; // initialize Prisma Client
import * as bcrypt from 'bcrypt';

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

  const img5 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT005KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT005KNO0.png',
      gal_1_path: 'assets/article/BT005KNO1.png',
      gal_2_path: 'assets/article/BT005KNO2.png',
      gal_3_path: 'assets/article/BT005KNO3.png',
    },
  });

  const img6 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT006KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT006KNO0.png',
      gal_1_path: 'assets/article/BT006KNO1.png',
      gal_2_path: 'assets/article/BT006KNO2.png',
      gal_3_path: 'assets/article/BT006KNO3.png',
    },
  });

  const img7 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT007KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT007KNO0.png',
      gal_1_path: 'assets/article/BT007KNO1.png',
      gal_2_path: 'assets/article/BT007KNO2.png',
      gal_3_path: 'assets/article/BT007KNO3.png',
    },
  });

  const img8 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT008KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT008KNO0.png',
      gal_1_path: 'assets/article/BT008KNO1.png',
      gal_2_path: 'assets/article/BT008KNO2.png',
      gal_3_path: 'assets/article/BT008KNO3.png',
    },
  });

  const img9 = await prisma.gallery.upsert({
    where: { thumbnail_path: 'assets/article/BT009KNO0.png' },
    update: {},
    create: {
      thumbnail_path: 'assets/article/BT009KNO0.png',
      gal_1_path: 'assets/article/BT009KNO1.png',
      gal_2_path: 'assets/article/BT009KNO2.png',
      gal_3_path: 'assets/article/BT009KNO3.png',
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

  const post5 = await prisma.article.upsert({
    where: { title: 'Black Sakura' },
    update: {},
    create: {
      title: 'Black Sakura',
      description: 'Black t-shirt with Sakura',
      reference: 'TB005SAK',
      price: 23,
      stock: 20,
      published: true,
      galleryId: img5.id,
    },
  });

  const post6 = await prisma.article.upsert({
    where: { title: 'Black Dragon' },
    update: {},
    create: {
      title: 'Black Dragon',
      description: 'Black t-shirt with Dragon',
      reference: 'TB006DRA',
      price: 24,
      stock: 20,
      published: true,
      galleryId: img6.id,
    },
  });

  const post7 = await prisma.article.upsert({
    where: { title: 'Black Cherry Blossom' },
    update: {},
    create: {
      title: 'Black Cherry Blossom',
      description: 'Black t-shirt with Cherry Blossom',
      reference: 'TB007CHR',
      price: 25,
      stock: 20,
      published: true,
      galleryId: img7.id,
    },
  });

  const post8 = await prisma.article.upsert({
    where: { title: 'Black Dragon' },
    update: {},
    create: {
      title: 'Black Dragon',
      description: 'Black t-shirt with Dragon',
      reference: 'TB008DRG',
      price: 30,
      stock: 15,
      published: true,
      galleryId: img8.id,
    },
  });

  const post9 = await prisma.article.upsert({
    where: { title: 'Black Samurai' },
    update: {},
    create: {
      title: 'Black Samurai',
      description: 'Black t-shirt with Samurai',
      reference: 'TB009SAM',
      price: 28,
      stock: 18,
      published: true,
      galleryId: img9.id,
    },
  });

  // User

  const roundsOfHashing = 10;
  const passwordAdmin1 = await bcrypt.hash('adminadmin', roundsOfHashing);
  const passwordUser1 = await bcrypt.hash('useruser', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'admin@admin.admin' },
    update: {},
    create: {
      firstname: 'Ju',
      lastname: 'Canse',
      birthday: '10/10/1990',
      email: 'admin@admin.admin',
      role: 'ADMIN',
      password: passwordAdmin1,
      avatarPath: 'assets/avatar/user-avatar-00001',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user@user.user' },
    update: {},
    create: {
      firstname: 'Maggy',
      lastname: 'BIBITTE',
      birthday: '10/10/1990',
      email: 'user@user.user',
      role: 'USER',
      password: passwordUser1,
      avatarPath: 'assets/avatar/user-avatar-00002',
    },
  });

  console.log({ post1, post2, post3, post4, post5, post6, post7, post8, post9 });
  console.log({ img1, img2, img3, img4 });
  console.log({ user1, user2 });
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
