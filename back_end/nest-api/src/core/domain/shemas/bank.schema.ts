import { IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


export type BankDocument = BankModelSchema & Document;

@Schema()
export class BankModelSchema {
  
  @Prop( { type: String, unique: true, required: true, IsNotEmpty: true })
  @ApiProperty()
  name: string;

  @Prop( { type: Number, required: true, IsNotEmpty: true } )
  @ApiProperty()
  balance: number;

}

export const BankSchema = SchemaFactory.createForClass(BankModelSchema);