import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_user',
      password: 'your_password',
      database: 'your_database',
      autoLoadEntities: true,
      synchronize: true, // Automatically creates tables (not for production)
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
