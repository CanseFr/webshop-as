/*
  Warnings:

  - A unique constraint covering the columns `[reference]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Article_reference_key` ON `Article`(`reference`);
