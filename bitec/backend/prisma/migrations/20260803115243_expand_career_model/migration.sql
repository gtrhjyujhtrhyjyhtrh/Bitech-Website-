/*
  Warnings:

  - You are about to drop the column `department` on the `Career` table. All the data in the column will be lost.
  - You are about to drop the column `employmentType` on the `Career` table. All the data in the column will be lost.
  - Made the column `description` on table `Career` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Career" DROP COLUMN "department",
DROP COLUMN "employmentType",
ADD COLUMN     "applyEmail" TEXT,
ADD COLUMN     "departments" TEXT,
ADD COLUMN     "eligibility" TEXT,
ADD COLUMN     "learningPoints" TEXT,
ADD COLUMN     "whatsapp" TEXT,
ALTER COLUMN "description" SET NOT NULL;
