import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  type:any = "email";
  Input_email:any;
  Input_domain:any;
  Input_zip:any;
  output_email:any;
  output_domain:any;
  output_zip:any
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl: LoadingController,
    private DataServiceProvider:DataServiceProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  CheckRex_email(){
    console.log("run === this.DataServiceProvider.PostData({});");
    this.presentLoadingCustom();

    let run = this.DataServiceProvider.GetData({url:"http://localhost:1880/vaild?input="+this.Input_email+"&type=email"}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        //this.listproduct = value;
        this.output_email = value.data.result;

        this.loadingView.dismiss();
        //return value;
      }
      else {
        console.log("Send value01 else", value);
        let errordata = this.DataServiceProvider.HTTP_errorhandle(value.error);
        console.log("errordata",errordata)
        this.presentAlert(errordata.title,errordata.message);
        this.loadingView.dismiss();
        //return value;
      }
    }, error => { console.error(error.message) },
      () => { console.log('Completed subscribe007') }
    )
  }
  CheckRex_domain(){
    console.log("run === this.DataServiceProvider.PostData({});");
    this.presentLoadingCustom();

    let run = this.DataServiceProvider.GetData({url:"http://localhost:1880/vaild?input="+this.Input_domain+"&type=domain"}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        //this.listproduct = value;
        this.output_domain = value.data.result;

        this.loadingView.dismiss();
        //return value;
      }
      else {
        console.log("Send value01 else", value);
        let errordata = this.DataServiceProvider.HTTP_errorhandle(value.error);
        console.log("errordata",errordata)
        this.presentAlert(errordata.title,errordata.message);
        this.loadingView.dismiss();
        //return value;
      }
    }, error => { console.error(error.message) },
      () => { console.log('Completed subscribe007') }
    )
  }
  CheckRex_zip(){
    console.log("run === this.DataServiceProvider.PostData({});");
    this.presentLoadingCustom();

    let run = this.DataServiceProvider.GetData({url:"http://localhost:1880/vaild?input="+this.Input_zip+"&type=zip"}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        //this.listproduct = value;
        this.output_zip = value.data.result;

        this.loadingView.dismiss();
        //return value;
      }
      else {
        console.log("Send value01 else", value);
        let errordata = this.DataServiceProvider.HTTP_errorhandle(value.error);
        console.log("errordata",errordata)
        this.presentAlert(errordata.title,errordata.message);
        this.loadingView.dismiss();
        //return value;
      }
    }, error => { console.error(error.message) },
      () => { console.log('Completed subscribe007') }
    )
  }
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

   presentAlert(title,subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
