import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { BankUseCase } from '../core/domain/use-cases/bank/bank.use-case';
import { BankCreateDto } from './../core/domain/dtos/bank-create.dto';


@Controller("/bank")
@ApiTags('Bank')
export class BankController {

  constructor( private banckUseCase: BankUseCase ){}

  @Post()
  public create(@Body() bankCreateDto: BankCreateDto): Promise<BankCreateDto>{

    return this.banckUseCase.create(bankCreateDto);
  }

  @Get(':id')
  @ApiParam({name: 'id'})
  public finOne(@Param('id') id: string): Promise<BankCreateDto>{
     
    return this.banckUseCase.findById(id);
  }

  @Get()
  public findAll(): Promise<BankCreateDto[]>{

    return this.banckUseCase.findAll();
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() bankCreateDto: BankCreateDto): Promise<BankCreateDto>{

    return this.banckUseCase.patch(id, bankCreateDto);
  }

  @Delete(':id')
  @ApiParam({name: 'id'})
  public delete(@Param('id') id: string): Promise<BankCreateDto>{
    
    return this.banckUseCase.delete(id);
  }
}
