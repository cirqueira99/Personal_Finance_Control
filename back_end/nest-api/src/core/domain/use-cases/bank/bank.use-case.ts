import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountCreateMapper } from './../../mappers/account-create.mapper';
import { BankEntity } from './../../entities/bank.entity';
import { BankService } from './../../../../services/bank/bank.service';
import { UseCase } from 'src/core/base/use-case';
import { BankCreateDto } from '../../dtos/bank-create.dto';
import { BankCreateMapper } from '../../mappers/bank-create.mapper';
import { BankModelSchema } from '../../shemas/bank.schema';

@Injectable()
export class BankUseCase implements UseCase<BankCreateDto> {
  
  private banckCreateMapper: BankCreateMapper;
  private bankEntity: BankEntity;
  private banks: BankCreateDto[];
  
  constructor(private bankService: BankService){ 
    this.banckCreateMapper = new BankCreateMapper();
  }
  
  async create ( bankCreateDto: BankCreateDto): Promise<BankCreateDto> {
    this.bankEntity = this.banckCreateMapper.mapFrom(bankCreateDto);
    
    const bank_responde = await this.bankService.create(this.bankEntity);

    return this.banckCreateMapper.mapTo(bank_responde);
  }

  async findById(id: string): Promise<BankCreateDto> {
    const bank_responde = await this.bankService.findById(id);

    return this.banckCreateMapper.mapTo(bank_responde);
  }

  async findAll(): Promise<BankModelSchema[]> {
   this.banks = [];
   this.bankEntity = new BankEntity();
   
   const bank_responde = await this.bankService.findAll();

   bank_responde.forEach(
    element => {
      this.bankEntity.id = element.id;
      this.bankEntity.name = element.name;
      this.bankEntity.balance = element.balance;

      this.banks.push( this.banckCreateMapper.mapTo( this.bankEntity ) );
    }
   )

   return this.banks;
  }
  
  update(id: string): Observable<BankCreateDto> {
    throw new Error('Method not implemented.');
  }

  async patch(id: string, bank: BankCreateDto): Promise<BankCreateDto> {
     this.bankEntity = new BankEntity;
     this.bankEntity = this.banckCreateMapper.mapFrom( bank );

     await this.bankService.patch(id, this.bankEntity);

     const bank_responde = await this.bankService.findById(id);

     return this.banckCreateMapper.mapTo( bank_responde );
  }

  async delete(id: string) {
    const bank_responde = await this.bankService.delete(id);

    return this.banckCreateMapper.mapTo( bank_responde );
  }
  
}