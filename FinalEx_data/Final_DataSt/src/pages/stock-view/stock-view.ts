import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Chart} from 'Chart.js';
import {DataServiceProvider} from '../../providers/data-service/data-service'
/**
 * Generated class for the StockViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-view',
  templateUrl: 'stock-view.html',
})
export class StockViewPage {
  name = this.navParams.data;
  constructor(public navCtrl: NavController, public navParams: NavParams,private DataServiceProvider:DataServiceProvider,
    private loadingCtrl: LoadingController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockViewPage');
    this.createlineChart();
    this.GetStockInfo();
  }

  lineChartEl_AddData(List_Value: any, List_Label: any) {
    this.linechartValues.push(List_Value);
    this.linechartLabels.push(List_Label);
    this.linechartColours.push(this.getRandomColor());
    this.linechartHoverColours.push(this.getRandomColor());
    this.lineChartEl.update();
  }
  ChartRemoveValue() {
    let count = this.linechartValues.length;
    for (let index = 0; index < count; index++) {
      console.log("ChartRemoveValue")
      this.linechartValues.shift();
      this.linechartLabels.shift();
      this.linechartColours.shift();
      this.linechartHoverColours.shift();
    }
    this.lineChartEl.update();
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  GetStockInfo(){
    console.log("run === this.DataServiceProvider.PostData({});");
    this.presentLoadingCustom();

    let run = this.DataServiceProvider.GetData({url:"http://localhost:1880/stocks?name="+this.name}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        //this.listproduct = value;
        this.ChartRemoveValue();
        value.data.data.forEach(element => {
          this.lineChartEl_AddData(element.price_close,element.datetime);
        });
        this.loadingView.dismiss();
        //return value;
      }
      else {
        console.log("Send value01 else", value);
        console.log("error", this.DataServiceProvider.HTTP_errorhandle(value.error))
        this.loadingView.dismiss();
        //return value;
      }
    }, error => { console.error(error.message) },
      () => { console.log('Completed subscribe007') }
    )
    

  }

  //strat chart
  //lineChart 
  @ViewChild('linecharthome') linecharthome;
  public lineChartEl: any;
  linechartLabels:any[] =[];
  linechartValues:any[] = [];
  linechartColours:any[] = [];
  linechartHoverColours:any[] = [];
  
  lineChartadddata(Labels,Values){
    this.linechartLabels.push(Labels);
    this.linechartValues.push(Values);
    this.lineChartEl.update();
  }
  createlineChart()
   {
      this.lineChartEl = new Chart(this.linecharthome.nativeElement,
      {
         type: 'line',
         data: {
            labels: this.linechartLabels,
            datasets: [{
               label                 : this.name,
               data                  : this.linechartValues,
               duration              : 2000,
               easing                : 'easeInQuart',
               backgroundColor       : this.linechartColours,
               hoverBackgroundColor  : this.linechartHoverColours,
               fill 				   : false
            }]
         },
         options : {
            maintainAspectRatio: false,
            legend         : {
               display     : true,
               boxWidth    : 80,
               fontSize    : 15,
               padding     : 0
            },
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero:true,
                     stepSize: 1,
                     max : 10
                  }
               }],
               xAxes: [{
                  ticks: {
                     autoSkip: false
                  }
               }]
            }
         }
      });
   }
   //end lineChart 
   loadingView:any;
   presentLoadingCustom() {
     this.loadingView = this.loadingCtrl.create({
       spinner: 'hide',
       content: `
         <div class="custom-spinner-container">
           <div class="custom-spinner-box"><object data='../../assets/icon/loading.svg' type='image/svg+xml'></object></div>
         </div>`,
       duration: 15000
     });
     this.loadingView.onDidDismiss(() => {
       console.log('Dismissed loading');
     });
   
     this.loadingView.present();
   }
   doRefresh(refresher) {
     console.log('Begin async operation', refresher);
 
     ////this.GetOrders();
     setTimeout(() => {
       console.log('Async operation has ended');
       refresher.complete();
     }, 4000);
   }

}
