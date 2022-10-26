
import { Mapper } from 'src/core/base/mapper';
import { BankEntity } from '../entities/bank.entity';
import { BankCreateDto } from './../dtos/bank-create.dto';


export class BankCreateMapper extends Mapper< BankCreateDto, BankEntity > {
  
  public mapFrom(bankCreateDto: BankCreateDto): BankEntity {
    const bank: BankEntity = new BankEntity();
    bank.name = bankCreateDto.name;
    bank.balance = bankCreateDto.balance;
    
    return bank;
  }
  
  public mapTo(bankEntity: BankEntity): BankCreateDto {
    const bank: BankCreateDto = new BankCreateDto();
    bank.id = bankEntity.id;
    bank.name = bankEntity.name;
    bank.balance = bankEntity.balance;

    return bank;
  }

}