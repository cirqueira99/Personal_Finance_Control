import { BankUseCase } from '../use-cases/bank/bank.use-case';
import { BankService } from './../../../services/bank/bank.service';
import { BankModelSchema, BankSchema } from './../shemas/bank.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { BankController } from 'src/controllers/bank.controller';


@Module({
  imports: [MongooseModule.forFeature([{name: BankModelSchema.name, schema: BankSchema}])],
  controllers: [BankController],
  providers: [BankService, BankUseCase]
})

export class BankModule {}