/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "theme" JSONB,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanApplication" (
    "id" TEXT NOT NULL,
    "bankId" TEXT NOT NULL,
    "loanType" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "currentAddress" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "companyName" TEXT,
    "businessName" TEXT,
    "income" DOUBLE PRECISION,
    "turnover" DOUBLE PRECISION,
    "goldWeight" DOUBLE PRECISION,
    "goldType" TEXT,
    "photo" TEXT,
    "idProof" TEXT,
    "addressProof" TEXT,
    "incomeProof" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoanApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_code_key" ON "Bank"("code");

-- AddForeignKey
ALTER TABLE "LoanApplication" ADD CONSTRAINT "LoanApplication_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
