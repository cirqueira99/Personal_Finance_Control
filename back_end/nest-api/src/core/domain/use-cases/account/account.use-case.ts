import { BankService } from './../../../../services/bank/bank.service';
import { AccountModelSchema } from './../../shemas/account.schema';
import { UseCase } from 'src/core/base/use-case';
import { Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';

import { AccountEntity } from './../../entities/account.entity';
import { AccountCreateDto } from './../../dtos/account-create.dto';
import { AccountCreateMapper } from './../../mappers/account-create.mapper';
import { AccountService } from './../../../../services/account/account.service';

@Injectable()
export class AccountUseCase implements UseCase<AccountCreateDto>{
 
  private accountCreateMapper: AccountCreateMapper;
  private accountEntity: AccountEntity;
  private accounts: AccountCreateDto[];
 
  constructor( private accountService: AccountService, private bankService: BankService){ 
    this.accountCreateMapper = new AccountCreateMapper();
   }

  async create(accountCreateDto: AccountCreateDto): Promise<AccountCreateDto>{  

    try{
      const bank_responde = await this.bankService.findOne(accountCreateDto.name_bank);
      
      if(!bank_responde){
        throw new Error('O banco inserido não existe!');
      }    
    }catch(error){
      console.log(`findOne error--> ${error}`);
      return error;
    }

    try{
      this.accountEntity = this.accountCreateMapper.mapFrom(accountCreateDto);
      const account_response = await this.accountService.create(this.accountEntity)
      
      if(!account_response){
        throw new Error('O banco inserido não existe!');
      }else{
        return this.accountCreateMapper.mapTo(account_response);   
      }    
    }catch(error){
      console.log(`findOne error--> ${error}`);
      return error;
    }  

  }

  async findById(id: string): Promise<AccountCreateDto> {
    const account_response = await this.accountService.findById(id);
    
    return this.accountCreateMapper.mapTo(account_response);
  }
  
  async findOne(id: string): Promise<AccountCreateDto> {
    const account_response = await this.accountService.findOne(id);
    
    return this.accountCreateMapper.mapTo(account_response);
  }
  
  async findAll(): Promise<AccountCreateDto[]>{    
    this.accounts = [];
    this.accountEntity = new AccountEntity;
    
    const accountresponse = await this.accountService.findAll(); //console.log("accountresponse:", accountresponse)
    
    accountresponse.forEach(
      element => {       
        this.accountEntity.id = element.id;
        this.accountEntity.name = element.name;
        this.accountEntity.type_account = element.type_account;
        this.accountEntity.name_bank = element.name_bank;
        this.accountEntity.balance = element.balance;
        
        this.accounts.push( this.accountCreateMapper.mapTo( this.accountEntity ) );
      }
    )
      
    return this.accounts;
  }
    
  update(id: string): Observable<AccountCreateDto> {
    throw new Error('Method not implemented.');
  }

  async patch(id: string, AccountCreateDto: AccountCreateDto): Promise<AccountCreateDto> {
    this.accountEntity = new AccountEntity;
    this.accountEntity = this.accountCreateMapper.mapFrom(AccountCreateDto);

    await this.accountService.patch(id, this.accountEntity);

    const account_uptade = await this.accountService.findOne(id);
    
    
    return this.accountCreateMapper.mapTo( account_uptade );  
  }

  async delete(id: string) {
    const account_response = await this.accountService.delete(id);
  
    return this.accountCreateMapper.mapTo(account_response);
  }

}