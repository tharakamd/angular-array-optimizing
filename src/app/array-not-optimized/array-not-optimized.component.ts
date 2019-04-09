import {Component, OnInit} from '@angular/core';
import {ChatMessage} from '../chat-message';

@Component({
  selector: 'app-array-not-optimized',
  templateUrl: './array-not-optimized.component.html',
  styleUrls: ['./array-not-optimized.component.css']
})
export class ArrayNotOptimizedComponent implements OnInit {

  messages: ChatMessage[] = [];

  constructor() {
    this.fillInitialArray();
  }

  ngOnInit() {
  }

  addNewRandomMessage() {
    const newMessageQueue: ChatMessage[] = this.messages.slice();
    const messageContent: string = Math.random().toString(36).substring(7);
    const messageId: number = Math.random();
    newMessageQueue.push(new ChatMessage(messageId, messageContent));
    this.messages = [];
    this.messages = newMessageQueue;

  }

  private fillInitialArray() {
    this.messages.push(new ChatMessage(0, 'Hi'));
    this.messages.push(new ChatMessage(1, 'Hi !!!'));
    this.messages.push(new ChatMessage(2, 'Any plans today ?'));
    this.messages.push(new ChatMessage(3, 'Noop'));
    this.messages.push(new ChatMessage(4, 'Just optimizing some arrays :P'));
  }
}
