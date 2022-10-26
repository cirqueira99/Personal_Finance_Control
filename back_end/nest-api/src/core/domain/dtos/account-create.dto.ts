import { AccountEntity } from './../entities/account.entity';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class AccountCreateDto extends AccountEntity {
  
  @IsNotEmpty()
  @IsString()
  public name: string;
  
  @IsNotEmpty()
  @IsString()
  public type_account: string;
  
  @IsNotEmpty()
  @IsString()
  public name_bank: string;
  
  @IsNotEmpty()
  @IsNumber()
  public balance: number;

 
}

