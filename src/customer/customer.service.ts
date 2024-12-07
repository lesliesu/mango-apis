import { Injectable } from '@nestjs/common';
import {
  PAGINATION_LIMIT_MAX,
  PAGINATION_LIMIT_MIN,
  PaginationRequestDto,
} from 'src/shared/dto/pagination-request.dto';
import { PaginationResponseDto } from 'src/shared/dto/pagination-response.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  async findAll(
    paginationDto: PaginationRequestDto,
  ): Promise<PaginationResponseDto<Customer>> {
    let { limit = PAGINATION_LIMIT_MIN } = paginationDto;
    const { page = 1 } = paginationDto;
    if (limit > PAGINATION_LIMIT_MAX) {
      limit = PAGINATION_LIMIT_MAX;
    }
    return await Promise.resolve({ totalItems: 0, limit, page, data: [] });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`;
  // }
}
