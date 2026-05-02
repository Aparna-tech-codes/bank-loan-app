export class CreateLoanDto {
  bankCode!: string;
  loanType!: string;

  fullName!: string;
  email!: string;
  mobile!: string;
  dob!: Date;

  currentAddress!: string;
  permanentAddress!: string;

  employmentType!: string;

  companyName?: string;
  businessName?: string;

  income?: number;
  turnover?: number;

  goldWeight?: number;
  goldType?: string;

  photo?: string;
  idProof?: string;
  addressProof?: string;
  incomeProof?: string;
}