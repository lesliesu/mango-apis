export class PaginationRequestDto {
  page?: number;
  limit?: number;
}

export const PAGINATION_LIMIT_MAX = 200;
export const PAGINATION_LIMIT_MIN = 20;
