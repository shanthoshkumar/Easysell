import { Component, OnInit } from '@angular/core';
import CanvasJS from'../../assets/canvasjs.min.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
              
      var chart = new CanvasJS.Chart("chartContainer-1", {
        animationEnabled: true,
        title: {
          text: "Email Statistics"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: 62, label: "Open"},
            {y: 32, label: "Bounce"},
            {y: 6, label: "Unsubscribe"},
          ]
        }]
      });
      chart.render();

          var chart = new CanvasJS.Chart("chartContainer-2",
          {
            title:{
              text: "Users Behaviour"
            },
            
            data: [
            {
              type: "bar",
              showInLegend: true,
              legendText: "Open",
              color: "gold",
              dataPoints: [
              { y: 198, label: "0"},
              { y: 201, label: "100"},
              { y: 202, label: "200"},
              { y: 236, label: "300"},
              { y: 395, label: "400"},
              { y: 957, label: "500"}
              ]
            },
            {
              type: "bar",
              showInLegend: true,
              legendText: "click",
              color: "silver",
              dataPoints: [
              { y: 166, label: "0"},
              { y: 144, label: "100"},
              { y: 223, label: "200"},
              { y: 272, label: "300"},
              { y: 319, label: "400"},
              { y: 759, label: "500"}
              ]
            },
            {
              type: "bar",
              showInLegend: true,
              legendText: "Click Second time",
              color: "#DCA978",
              dataPoints: [
              { y: 185, label: "0"},
              { y: 128, label: "100"},
              { y: 246, label: "200"},
              { y: 272, label: "300"},
              { y: 296, label: "400"},
              { y: 666, label: "500"}
              ]
            }
            ]
          });
      
      chart.render();

           }

}