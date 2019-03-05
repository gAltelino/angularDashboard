import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [10, 234, 22, 10, 99, 32], label: 'Sentiment Analysy'},
  {data: [200, 140, 213, 240, 120, 99], label: 'Image Recogn'},
  {data: [10, 123, 333, 800, 99, 120], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = LINE_CHART_SAMPLE_DATA;
      public lineChartLabels = LINE_CHART_LABELS;
      public lineChartOptions: any = {
        responsive: true
      };
      public lineChartLegend: true;
      public lineChartType = 'line';
      public lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
