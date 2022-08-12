import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAllMsgs() {}

  @Post()
  createMsg(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getUniqueMsg(@Param('id') id: string) {
    console.log(id);
  }
}
