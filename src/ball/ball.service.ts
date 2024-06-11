import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Ball } from './ball.model'; 

@Injectable()
export class BallService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Ball[]> {
    return this.prisma.ball.findMany();
  }

  async findOne(id: number): Promise<Ball | null> {
    return this.prisma.ball.findUnique({
      where: { id },
    });
  }

  async create(data: Ball): Promise<Ball> {
    return this.prisma.ball.create({ data });
  }

  async update(id: number, data: Ball): Promise<Ball | null> {
    return this.prisma.ball.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Ball | null> {
    return this.prisma.ball.delete({
      where: { id },
    });
  }
}
