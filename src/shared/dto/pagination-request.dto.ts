import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationRequestDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(100)
  limit: number = 10;
}
