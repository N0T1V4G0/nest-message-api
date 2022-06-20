import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'listMessages';
  }

  @Post()
  async createMessage(@Body() body) {
    console.log(body);
    return 'createMessage';
  }

  @Get('/:id')
  async getMessage(@Param('id') id) {
    console.log(id);
    return 'getMessage';
  }
}
