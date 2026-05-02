import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Injectable()
export class LoanService {
  constructor(private prisma: PrismaService) {}

  async createLoan(dto: CreateLoanDto) {
    const bank = await this.prisma.bank.findUnique({
      where: { code: dto.bankCode },
    });

    if (!bank) {
      throw new Error('Bank not found');
    }

    return this.prisma.loanApplication.create({
      data: {
        bankId: bank.id,
        loanType: dto.loanType,

        fullName: dto.fullName,
        email: dto.email,
        mobile: dto.mobile,
        dob: new Date(dto.dob),

        currentAddress: dto.currentAddress,
        permanentAddress: dto.permanentAddress,

        employmentType: dto.employmentType,
        companyName: dto.companyName,
        businessName: dto.businessName,

        income: dto.income,
        turnover: dto.turnover,

        goldWeight: dto.goldWeight,
        goldType: dto.goldType,

        photo: dto.photo,
        idProof: dto.idProof,
        addressProof: dto.addressProof,
        incomeProof: dto.incomeProof,
      },
    });
  }
}