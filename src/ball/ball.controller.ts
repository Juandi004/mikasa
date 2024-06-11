// ball.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Ball } from './ball.model';
import { BallService } from './ball.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('balls')
@ApiTags('Balls')
export class BallController {
  constructor(private readonly ballService: BallService) {}

  @Get()
  @ApiOperation({ summary: 'Get all balls' })
  @ApiResponse({ status: 200, description: 'List of balls', type: Ball, isArray: true })
  async findAll(): Promise<Ball[]> {
    return this.ballService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a ball by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the ball' })
  @ApiResponse({ status: 200, description: 'Ball found', type: Ball })
  @ApiResponse({ status: 404, description: 'Ball not found' })
  async findOne(@Param('id') id: string): Promise<Ball> {
    return this.ballService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new ball' })
  @ApiBody({ type: Ball })
  @ApiResponse({ status: 201, description: 'Ball created', type: Ball })
  async create(@Body() data: Ball): Promise<Ball> {
    return this.ballService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a ball by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the ball' })
  @ApiBody({ type: Ball })
  @ApiResponse({ status: 200, description: 'Ball updated', type: Ball })
  @ApiResponse({ status: 404, description: 'Ball not found' })
  async update(@Param('id') id: string, @Body() data: Ball): Promise<Ball> {
    return this.ballService.update(+id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a ball by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the ball' })
  @ApiResponse({ status: 200, description: 'Ball deleted', type: Ball })
  @ApiResponse({ status: 404, description: 'Ball not found' })
  async remove(@Param('id') id: string): Promise<Ball> {
    return this.ballService.remove(+id);
  }
}
