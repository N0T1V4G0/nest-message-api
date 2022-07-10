import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: number) {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);
    return messages[id];
  }

  async findAll() {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);
    return messages;
  }

  async create(content: string) {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);
    const id = Math.floor(Math.random() * 999) + 1;
    console.log(id);
    messages[id] = { id, content };
    const dataJson = JSON.stringify(messages);
    await writeFile('messages.json', dataJson);
  }
}
