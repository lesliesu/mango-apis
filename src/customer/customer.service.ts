import { Injectable, Logger } from '@nestjs/common';
import { PaginationRequestDto } from '../shared/dto/pagination-request.dto';
import { PaginationResponseDto } from '../shared/dto/pagination-response.dto';
import { Customer } from './entities/customer.entity';
import { customersDummyData } from '../dummyData/customers';

@Injectable()
export class CustomerService {
  private readonly logger = new Logger(CustomerService.name);

  async findAll(
    paginationDto: PaginationRequestDto,
  ): Promise<PaginationResponseDto<Customer>> {
    const { page, limit } = paginationDto;

    const start = (page - 1) * limit;
    const end = start + limit;
    // this.logger.log('pagination:', {
    //   start,
    //   end,
    //   limit,
    //   page,
    //   total: customersDummyData.length,
    // });
    const data = customersDummyData.slice(start, end);
    return await Promise.resolve({
      totalItems: customersDummyData.length,
      limit,
      page,
      data,
    });
  }
}
