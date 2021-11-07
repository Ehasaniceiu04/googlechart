import { Component, OnInit } from '@angular/core';
import { MetalModel } from '../../model/metal.model';
import { MetalService } from '../../services/metal.service';
declare var google: any;

@Component({
  selector: 'column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  constructor(private metalService:MetalService) { }

  ngOnInit(): void {
    var metals=this.metalService.getAll();
    google.charts.load('current', {packages: ['corechart']});
    
    this.buildChart(metals);
  }
  buildChart(metals:MetalModel[]){
   var renderChart=(chart:any)=>{
  //   var data = google.visualization.arrayToDataTable([
  //     ['', '',{'role':'style'},{'role':'annotation'}],
  //     ['Copper', 8.94,'#b87333','Cu'],            // RGB value
  //     ['Silver', 10.49,'silver','Ag'],            // English color name
  //     ['Gold', 19.30,'gold','Au'],

  //   ['Platinum', 21.45,'color: #e5e4e2','Pt' ], // CSS-style declaration
  //  ]);
  var columnChartItems=[];
  columnChartItems.push(['', '',{'role':'style'},{'role':'annotation'}]);
  metals.forEach(item=>{
    columnChartItems.push([item.metalName,item.density,item.style,item.label]);
  });
  var data = google.visualization.arrayToDataTable(columnChartItems);
   var options = {
    title: 'Density of Precious Metals, in g/cm^3',
    legend:'none'
  };
   
   chart().draw(data,options);
   }
   var columnChart =()=> new google.visualization.ColumnChart(document.getElementById("divColumnChart"));
   var callback=()=>renderChart(columnChart);
   google.charts.setOnLoadCallback(callback);
  }
  // drawChart(){
  //   var data = google.visualization.arrayToDataTable([
  //     ['', '',{'role':'style'},{'role':'annotation'}],
  //     ['Copper', 8.94,'#b87333','Cu'],            // RGB value
  //     ['Silver', 10.49,'silver','Ag'],            // English color name
  //     ['Gold', 19.30,'gold','Au'],

  //   ['Platinum', 21.45,'color: #e5e4e2','Pt' ], // CSS-style declaration
  //  ]);
  //  var options = {
  //   title: 'Density of Precious Metals, in g/cm^3',
  //   legend:'none'
  // };
  //  var chart = new google.visualization.ColumnChart(document.getElementById("divColumnChart"));
  //  chart.draw(data,options);
  // }

}
