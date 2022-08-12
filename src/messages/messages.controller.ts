import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  getAllMsgs() {
    return this.messagesService.findAll();
  }

  @Post()
  createMsg(@Body() body: CreateMessage) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getUniqueMsg(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
