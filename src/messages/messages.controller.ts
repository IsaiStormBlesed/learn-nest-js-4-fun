import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  getAllMsgs() {
    return this.messagesService.findAll();
  }

  @Post()
  createMsg(@Body() body: CreateMessage) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getUniqueMsg(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) throw new NotFoundException('Message not found');

    return message;
  }
}
