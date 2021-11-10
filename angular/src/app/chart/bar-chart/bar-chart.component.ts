import { Component, OnInit } from '@angular/core';
import { MetalModel } from '../../model/metal.model';
import { MetalService } from '../../services/metal.service';
declare var google: any;

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private metalService: MetalService) { }

  ngOnInit(): void {
    var metals = this.metalService.getAll();
    google.charts.load('current', { packages: ['corechart'] });
    this.buildChart(metals);
  }
  buildChart(metals: MetalModel[]) {
    var renderChart = (chart: any) => {
      // var data = google.visualization.arrayToDataTable([
      //   ['', '', { role: 'style' }, { role: 'annotation' }],
      //   ['Copper', 8.94, '#b87333', 'Cu'],            // RGB value
      //   ['Silver', 10.49, 'silver', 'Ag'],            // English color name
      //   ['Gold', 19.30, 'gold', 'Au'],

      //   ['Platinum', 21.45, 'color: #e5e4e2', 'pt'], // CSS-style declaration
      // ]);
      var chartItems=[];
      chartItems.push( ['', '', { role: 'style' }, { role: 'annotation' }]);
      metals.forEach(item=>{
        chartItems.push([item.metalName,item.density,item.style,item.label]);
      });
      var data = google.visualization.arrayToDataTable(chartItems);
      var option = {
        title: 'Density of Precious Metals, in g/cm^3',
        legend: 'none'
      }
      chart().draw(data, option);
    }
    var barChart = () => new google.visualization.BarChart(document.getElementById("divBarChart"));
    var callBack = () => renderChart(barChart);
    google.charts.setOnLoadCallback(callBack);
  }
  // drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     ['', '', { role: 'style' }, { role: 'annotation' }],
  //     ['Copper', 8.94, '#b87333', 'Cu'],            // RGB value
  //     ['Silver', 10.49, 'silver', 'Ag'],            // English color name
  //     ['Gold', 19.30, 'gold', 'Au'],

  //     ['Platinum', 21.45, 'color: #e5e4e2', 'pt'], // CSS-style declaration
  //   ]);
  //   var option = {
  //     title: 'Density of Precious Metals, in g/cm^3',
  //     legend: 'none'
  //   }
  //   var chart = new google.visualization.BarChart(document.getElementById("divBarChart"));
  //   chart.draw(data, option);
  // }

}
