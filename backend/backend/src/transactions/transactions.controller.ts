import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() transactionDto: Partial<Transaction>): Promise<Transaction> {
    return this.transactionsService.create(transactionDto);
  }
}
