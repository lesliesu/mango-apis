import { Controller, Get, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { PaginationRequestDto } from 'src/shared/dto/pagination-request.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationRequestDto) {
    return this.customerService.findAll(paginationDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.customerService.findOne(+id);
  // }
}
