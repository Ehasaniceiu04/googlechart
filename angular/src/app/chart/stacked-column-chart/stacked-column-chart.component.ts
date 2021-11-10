import { Component, OnInit } from '@angular/core';
import { bookOrderModel } from '../../model/book-order.model';
import { BookSaleService } from '../../services/book-sale.service';
declare var google: any;

@Component({
  selector: 'stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.css']
})
export class StackedColumnChartComponent implements OnInit {

  constructor(private bookSaleService: BookSaleService) { }

  ngOnInit(): void {
    var bookSaleItemsPerYear = this.bookSaleService.getAll();
    google.charts.load('current', { packages: ['corechart'] });
    this.buildChart(bookSaleItemsPerYear);
  }
  buildChart(items: bookOrderModel[]) {
    var renderChart = (chart: any) => {
      // var data = google.visualization.arrayToDataTable([
      //   ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
      //     'Western', 'Literature', { role: 'annotation' }],
      //   ['2010', 10, 24, 20, 32, 18, 5, ''],
      //   ['2020', 16, 22, 23, 30, 16, 9, ''],
      //   ['2030', 28, 19, 29, 30, 12, 13, '']
      // ]);
      var chartItems=[];
      chartItems.push(['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
       'Western', 'Literature', { role: 'annotation' }]);
       items.forEach(item=>{
        chartItems.push([item.orderYear.toLocaleString(),item.fantasyScienceFiPerYearCount,item.romancePerYearCount,
          item.mysteryOrCrimePerYearCount,item.generalPerYearCount,item.westernPerYearCount,item.literaturePerYearCount,'']);
       })
       var data = google.visualization.arrayToDataTable(chartItems);
      var options = {
        width: 600,
        height: 400,
        isStacked: 'percent', // true, absolute, relative and percent
        legend: { position: 'top', maxLines: 3 }
      };
      chart().draw(data, options);
    }
    var stackedChart =()=> new google.visualization.ColumnChart(document.getElementById("divStackedColumnChart"));
    var callBack=()=>renderChart(stackedChart);
    google.charts.setOnLoadCallback(callBack);
  }
  // drawChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
  //       'Western', 'Literature', { role: 'annotation' }],
  //     ['2010', 10, 24, 20, 32, 18, 5, ''],
  //     ['2020', 16, 22, 23, 30, 16, 9, ''],
  //     ['2030', 28, 19, 29, 30, 12, 13, '']
  //   ]);
  //   var options = {
  //     width: 600,
  //     height: 400,
  //     isStacked: 'percent', // true, absolute, relative and percent
  //     legend: { position: 'top', maxLines: 3 }
  //   };
  //   var chart = new google.visualization.ColumnChart(document.getElementById("divStackedColumnChart"));
  //   chart.draw(data, options);

  // }

}
