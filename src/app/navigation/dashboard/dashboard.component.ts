import { SocketService } from './../socket.service';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values = [0];
  updateOptions: any;

  constructor(private socket: SocketService) { }
  ngOnInit(): void {

    this.socket.socketIo().on("outTopic", (arg) => {
      this.values.push(arg)
    })
  }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.values,
        type: 'line',
        showSymbol: false,
      },
    ],
  };

}
