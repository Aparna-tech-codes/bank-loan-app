import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';
import { BankModule } from './modules/bank/bank.module'; // ✅ ADD

@Module({
  imports: [BankModule], // ✅ ADD HERE
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}