// src/core/base/repository.ts

import { Observable } from "rxjs";
import { Entity } from "./entity";


export abstract class ServiceBase<TEntity extends Entity>{
    abstract create(data: TEntity);
    abstract patch(id: number);
    abstract findById(id: number);
    abstract findAll();
    abstract delete(id: number);
}