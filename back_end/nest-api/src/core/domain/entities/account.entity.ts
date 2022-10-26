import { Entity } from "../../base/entity";

export class AccountEntity extends Entity {
  public name: string;
  public type_account: string;
  public name_bank: string;
  public balance: number;
}