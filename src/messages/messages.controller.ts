import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMsgs() {}

  @Post()
  createMsg(@Body() body: CreateMessage) {
    console.log(body);
  }

  @Get('/:id')
  getUniqueMsg(@Param('id') id: string) {
    console.log(id);
  }
}
