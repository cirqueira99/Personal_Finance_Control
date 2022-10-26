import { AccountUseCase } from './../use-cases/account/account.use-case';
import { AccountService } from './../../../services/account/account.service';
import { AccountModelSchema, AccountSchema } from '../shemas/account.schema';
import { AccountController } from './../../../controllers/account.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: AccountModelSchema.name, schema: AccountSchema }])],
  controllers: [AccountController],
  providers: [AccountService, AccountUseCase]
})

export class AccountModule {}