import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../../model/activity.model';
import { ActivityService } from '../../activity.service';


declare var google: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    let activities: ActivityModel[] = this.activityService.getAll();
    google.charts.load('current', { packages: ['corechart'] });
    this.buildChart(activities);
  }
  buildChart(activities: ActivityModel[]) {
    var func = (chart: any) => {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      activities.forEach(item => {
        data.addRows([
          [item.activityName, item.activityHour]
        ]);
      });
      // data.addRows([
      //   ['Office Work', 8],
      //   ['Sleeping ', 7],
      //   ['Watching Movie', 2],
      //   ['Reading Books', 4]
      // ]);
      var options = {
        title: 'My Daily Activities',
        colors: ["#155c9e", "yellow", "red", "black"]
      };
      chart().draw(data, options);
    }
    var chart =()=> new google.visualization.PieChart(document.getElementById('divPieChart'));
    var callback=()=>func(chart);
    google.charts.setOnLoadCallback(callback);
  }
  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Office Work', 8],
      ['Sleeping ', 7],
      ['Watching Movie', 2],
      ['Reading Books', 4]
    ]);
    var options = {
      title: 'My Daily Activities',
      colors: ["#155c9e", "yellow", "red", "black"]
    };

    var chart = new google.visualization.PieChart(document.getElementById('divPieChart'));
    chart.draw(data, options);
  }

}
