import { BankService } from './../../../services/bank/bank.service';
import { AccountUseCase } from './../use-cases/account/account.use-case';
import { AccountService } from './../../../services/account/account.service';
import { AccountModelSchema, AccountSchema } from '../shemas/account.schema';
import { AccountController } from './../../../controllers/account.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { BankModelSchema, BankSchema } from '../shemas/bank.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: AccountModelSchema.name, schema: AccountSchema }]), 
    MongooseModule.forFeature([{name: BankModelSchema.name, schema: BankSchema}])
  ],
  controllers: [AccountController],
  providers: [AccountService, AccountUseCase, BankService]
})

export class AccountModule {}