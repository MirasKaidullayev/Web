import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(transactionDto: Partial<Transaction>): Promise<Transaction> {
    const transaction = this.transactionsRepository.create(transactionDto);
    return this.transactionsRepository.save(transaction);
  }
}
