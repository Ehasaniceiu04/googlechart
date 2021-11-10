import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './chart/pie-chart/pie-chart.component';
import { ColumnChartComponent } from './chart/column-chart/column-chart.component';
import { StackedColumnChartComponent } from './chart/stacked-column-chart/stacked-column-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    ColumnChartComponent,
    StackedColumnChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
