export class ChatMessage {
  id: number;
  content: string;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}
