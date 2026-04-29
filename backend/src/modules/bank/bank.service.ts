import { Injectable } from '@nestjs/common';
import { bankConfig } from '../../config/bank.config';

export type BankKey = keyof typeof bankConfig;

@Injectable()
export class BankService {
  getBankConfig(bank: string) {
    if (!(bank in bankConfig)) {
      return null;
    }

    return bankConfig[bank as BankKey];
  }
}