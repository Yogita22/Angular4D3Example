import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {DataService} from './../data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class BarChartComponent implements OnInit {

  barChartData = [];
  @ViewChild('barChart') private chartContainer: ElementRef;

  constructor(private dataservice:DataService) { }

  ngOnInit() : void {
  	this.getData();
  }


  createChart(response) {
    let element = this.chartContainer.nativeElement;
    let data = [];
    for (let i in response) {
    data.push(response[i].total);
	}

    this.barChartData = data;
     d3.select(element).selectAll("div")
  		.data(this.barChartData)
  		.enter()
  		.append("div")
  		.style("height", (d)=> d*10 + "px")
  	}

  	getData(): void {
    this.dataservice
        .getGitHubData()
        .then(response => {
            this.createChart(response);
    }); 
  }
}



