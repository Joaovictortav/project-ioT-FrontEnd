import { EventEmitter, Injectable, Output } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  @Output() emitter = new EventEmitter();

  private socket: Socket

  constructor(
  ) {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}
