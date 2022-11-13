import { AccountEntity } from './../../core/domain/entities/account.entity';
import { AccountModelSchema } from '../../core/domain/shemas/account.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AccountDocument } from "src/core/domain/shemas/account.schema";

@Injectable()
export class AccountService {

  constructor(@InjectModel(AccountModelSchema.name) private accountSchema: Model<AccountDocument>) {}
  
  async create(accountEntity: AccountEntity): Promise<AccountModelSchema>{
    const createdAccount = new this.accountSchema(accountEntity);
    
    return createdAccount.save();
  }

  async findById(id: string):  Promise<AccountModelSchema>{
    
    return this.accountSchema.findById(id);
  }
  async findOne(id: string):  Promise<AccountModelSchema>{
    
    return this.accountSchema.findOne({id});
  }

  async findAll(){
    return this.accountSchema.find().exec();
  }

  async patch(id: string, accountEntity: AccountEntity){

    return this.accountSchema.findByIdAndUpdate(id, accountEntity);
  }

  async delete(id: string): Promise<AccountModelSchema>{

    return this.accountSchema.findByIdAndDelete(id);
  }
}