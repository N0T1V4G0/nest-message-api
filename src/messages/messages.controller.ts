import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/CreateMessageDTO';

@Controller('messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return { message: 'not implemented' };
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDTO) {
    return { message: 'not implemented', body };
  }

  @Get('/:id')
  async getMessage(@Param('id') id) {
    return { message: 'not implemented', id };
  }
}
