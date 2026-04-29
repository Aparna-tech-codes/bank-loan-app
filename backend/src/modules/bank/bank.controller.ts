import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  @Get(':bank')
  getBank(@Param('bank') bank: string) {
    const config = this.bankService.getBankConfig(bank);

    if (!config) {
      throw new NotFoundException('Bank not found');
    }

    return config;
  }
}