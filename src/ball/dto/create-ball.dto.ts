// create-ball.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBallDto {
  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;
}
