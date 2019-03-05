import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public pieChartData: number[] = [200, 100, 99];
  public pieChartLabels: string[] = ['Max', 'Jup', 'Dex'];
  public colors: any[] = [
    {backgroundColor: ['#26547c', '#ff6b6b', '#ffd166']}
  ];
  public pieChartType = 'pie';

  ngOnInit() {
  }

}
