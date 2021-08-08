import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor(private socket: SocketService) { }

  ngOnInit(): void {
  }

  AcenderLedVermelho(){
    this.socket.ledRed();
  }

  AcenderLedAzul(){
    this.socket.ledBlue();
  }

  AcenderLedVerde(){
    this.socket.ledGrean();
  }

}
