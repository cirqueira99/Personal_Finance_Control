import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AccountCreateDto } from './../core/domain/dtos/account-create.dto';
import { AccountUseCase } from './../core/domain/use-cases/account/account.use-case';


@Controller("/account")
@ApiTags('Accounts')
export class AccountController {
  
  constructor( private accountUseCase: AccountUseCase ){}

  @Post()
  public create(@Body() accountCreateDto: AccountCreateDto): Promise<AccountCreateDto> {

    // const valid_nameBank = 

    return this.accountUseCase.create(accountCreateDto);
  }

  @Get(':id')
  @ApiParam({name: 'id'})
  public findOne(@Param('id') id: string): Promise<AccountCreateDto>{
    
    return this.accountUseCase.findById(id); 
  }

  @Get()
  public findAll(): Promise<AccountCreateDto[]>{
   
    return this.accountUseCase.findAll(); 
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() accountCreateDto: AccountCreateDto): Promise<AccountCreateDto> {
    
    return this.accountUseCase.patch(id, accountCreateDto);
  }

  @Delete(':id')
  @ApiParam({name: 'id'})
  public remove(@Param('id') id: string): Promise<AccountCreateDto> {
    return this.accountUseCase.delete(id);
  }
}