import { Mapper } from "src/core/base/mapper";
import { AccountCreateDto } from "../dtos/account-create.dto";
import { AccountEntity } from "../entities/account.entity";


export class AccountCreateMapper extends Mapper< AccountCreateDto, AccountEntity > {

  public mapFrom(accountCreateDto: AccountCreateDto): AccountEntity {
    const account: AccountEntity = new AccountEntity();
    account.name = accountCreateDto.name;
    account.type_account = accountCreateDto.type_account;
    account.name_bank = accountCreateDto.name_bank;
    account.balance = accountCreateDto.balance;

    return account;
  }

  public mapTo(accountEntity: AccountEntity): AccountCreateDto {
    const account: AccountCreateDto = new AccountCreateDto();
    account.id = accountEntity.id
    account.name = accountEntity.name;
    account.type_account = accountEntity.type_account;
    account.name_bank = accountEntity.name_bank;
    account.balance = accountEntity.balance;

    return account;
  }
}