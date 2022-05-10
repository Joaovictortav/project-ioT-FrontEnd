import { EventEmitter, Injectable, Output } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  @Output() emitter = new EventEmitter();

  socket: Socket;

  constructor(
  ) {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  socketIo() {
    return this.socket
  }

  ledRed() {
    this.socket.emit("led", "1");
  }


  ledBlue() {
    this.socket.emit("led", "2");
  }

  ledGrean() {
    this.socket.emit("led", "3");
  }
}
