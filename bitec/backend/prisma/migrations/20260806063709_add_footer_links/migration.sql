-- CreateTable
CREATE TABLE "FooterLink" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "FooterLink_pkey" PRIMARY KEY ("id")
);
