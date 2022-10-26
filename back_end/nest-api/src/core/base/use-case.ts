import { Observable } from "rxjs";
import { AccountCreateDto } from "../domain/dtos/account-create.dto";
import { BankCreateDto } from "../domain/dtos/bank-create.dto";
import { Entity } from "./entity";


export abstract class UseCase<TEntity extends Entity> {
    abstract create(data: TEntity);
    abstract findById(id: string);
    abstract findAll();
    abstract update(id: string);
    abstract patch(id: string, data: Partial<TEntity>);
    // abstract getOne(filter: Partial<TEntity>): Observable<TEntity>;
    // abstract getMany(filter: Partial<TEntity>): Observable<TEntity[]>;
    abstract delete(id: string);

}
