import { BankEntity } from './../../core/domain/entities/bank.entity';
import { BankModelSchema, BankDocument } from './../../core/domain/shemas/bank.schema';
import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class BankService {
  constructor(@InjectModel(BankModelSchema.name) private bankSchema: Model <BankDocument>){ }
  
  async create(bankEntity: BankEntity): Promise<BankModelSchema> {
    const createdBank = new this.bankSchema(bankEntity);

    return createdBank.save();
  }

  async findById(id: string): Promise<BankModelSchema> {
    
    return this.bankSchema.findById(id);
  }

  async findOne(id: string): Promise<BankModelSchema> {
   
    return this.bankSchema.findOne({name: id});
  } 
  
  async findAll() {
    
    return this.bankSchema.find().exec();
  }
  
  async patch(id: string, bankEntity: BankEntity) {
    
    return this.bankSchema.findByIdAndUpdate(id, bankEntity)
  }

  async delete(id: string): Promise<BankModelSchema> {
  
    return this.bankSchema.findByIdAndDelete(id);
  }



}