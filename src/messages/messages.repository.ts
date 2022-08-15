import { Injectable } from '@nestjs/common';
import { writeFile, readFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const randomID = Math.floor(Math.random() * 999);

    messages[randomID] = { randomID, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
