-- CreateTable
CREATE TABLE "NavbarItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NavbarItem_pkey" PRIMARY KEY ("id")
);
