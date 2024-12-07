import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }
}
