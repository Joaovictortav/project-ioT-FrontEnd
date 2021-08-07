import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  @Output() emitter = new EventEmitter();

  chatMessages: any[] = [];

  constructor(
    private socket: Socket
  ) {}

  getValues(): Observable <any> {
    return this.socket.fromEvent <any>('new-signals');
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data: any) => data.msg));
  }
}
