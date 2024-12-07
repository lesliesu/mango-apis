export class PaginationResponseDto<T> {
  data: T[];
  page: number;
  limit: number;
  totalItems: number;
}
