import {Component, OnInit} from '@angular/core';
import {ChatMessage} from '../chat-message';

@Component({
  selector: 'app-array-optimized',
  templateUrl: './array-optimized.component.html',
  styleUrls: ['./array-optimized.component.css']
})
export class ArrayOptimizedComponent implements OnInit {

  chatMessages: ChatMessage[] = [];

  constructor() {
    this.fillInitialArray();
  }

  ngOnInit() {
  }

  addNewRandomMessage() {
    const newChatMessages: ChatMessage[] = [];

    for (const chatMessage of this.chatMessages) {
      newChatMessages.push(new ChatMessage(chatMessage.id, chatMessage.content));
    }

    const messageContent: string = Math.random().toString(36).substring(7);
    const messageId: number = Math.random();
    newChatMessages.push(new ChatMessage(messageId, messageContent));

    this.chatMessages = [];
    this.chatMessages = newChatMessages;

  }

  trackChatMessage(index: number, chatMessage: ChatMessage) {
    return chatMessage.id;
  }

  private fillInitialArray() {
    this.chatMessages.push(new ChatMessage(0, 'Hi'));
    this.chatMessages.push(new ChatMessage(1, 'Hi !!!'));
    this.chatMessages.push(new ChatMessage(2, 'Any plans today ?'));
    this.chatMessages.push(new ChatMessage(3, 'Noop'));
    this.chatMessages.push(new ChatMessage(4, 'Just optimizing some arrays :P'));
  }

}
