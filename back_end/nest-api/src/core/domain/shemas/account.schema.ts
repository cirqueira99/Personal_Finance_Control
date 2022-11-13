import { IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import Document from "mongoose";


export type AccountDocument = AccountModelSchema & Document;

@Schema()
@ApiTags('account')
export class AccountModelSchema{

  @Prop({ type: String, required: true })
  @ApiProperty()
  name: string;

  @Prop({ type: String, required: true })
  @ApiProperty( )
  type_account: string;

  @Prop({ type: String, required: true, IsNotEmpty: true })
  @ApiProperty()
  name_bank: string;

  @Prop({ type: Number, required: true })
  @ApiProperty()
  balance: number;

}

export const AccountSchema = SchemaFactory.createForClass(AccountModelSchema);