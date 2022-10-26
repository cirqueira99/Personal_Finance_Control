import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BankEntity } from './../entities/bank.entity';

export class BankCreateDto extends BankEntity {
 
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  public balance: number;
}