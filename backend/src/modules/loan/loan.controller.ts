import { Body, Controller, Post } from "@nestjs/common";
import { LoanService } from "./loan.service";
import { CreateLoanDto } from "./dto/create-loan.dto";

@Controller("loan")
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post("apply")
  applyLoan(@Body() dto: CreateLoanDto) {
    return this.loanService.createLoan(dto);
  }
}