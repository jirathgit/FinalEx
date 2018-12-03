import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public HttpClient: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }
  public HTTP_errorhandle(HttpErrorResponse:any){
    let error = {title:'',
                message:'',
                status:''
              };
    error.title = HttpErrorResponse.name;
    error.message = HttpErrorResponse.message;
    error.status = HttpErrorResponse.statusText;
    return error;    
  }

  ///
  ///
/*   calltest(){
    console.log("run === this.DataServiceProvider.PostData({});");
    this.presentLoadingCustom();
    let run = this.DataServiceProvider.PostData({}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        this.listproduct = value;
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
  } */
  ////
  ///




  public PostData(option: {
    url?: any,
    token?: any,
    body?: any,
    timesout?: number,
    headers?:HttpHeaders
  }): any {
    let url = (option.url != null ? option.url : "http://localhost:44300/api/Merchandise/Search");
    let body = (option.body != null ? option.body : { "IdentityId": "true" })
    let token = (option.token != null ? option.token : "this.AuthServiceProvider.token");
    let timeout = (option.timesout > 0 ? option.timesout : 4000);
    let headers = (option.headers != null ? option.headers : new HttpHeaders().set('Authorization', token).set('Content-Type', 'application/json'))
    let _Subscribe: any //declaration variable to unsubscribe if any error is occurred
    let _access: any = { access: false, data: [], row: [], md5: [], error: [] }; // value that return to use in another function to determine whether date is complete or not

    if (body.IdentityId === null) { //Check data is valid or not
      return Observable.throw("Please insert body"); //throw "Please insert body"
    }
    else {
      return Observable.create(observer => {
        _Subscribe = this.HttpClient.post<any>(url, body, {headers: headers}) //Call function PostData from data-service
          .subscribe(
            data => {
              if (data) {
                _access.access = true;
                _access.data = data.data;
                _access.row = data.row;
                _access.md5 = data.md5;
                observer.next(_access);
                observer.complete();
              }
              else { 
                _access.access = false;
                _access.error = "data is null";
                observer.next(_access);
                observer.error(new Error('PostData Error!'));
                observer.complete();
                _Subscribe.unsubscribe();
              }
            },
            err => {
              _access.access = false;
              _access.data = err;
              _access.error = err;
              observer.next(_access);
              observer.error(new Error(err));
              observer.complete();
              _Subscribe.unsubscribe();
            },//can add function to handle the action of error
            () => { console.log('PostData Done'); } // when get data is completed. It will console.log('GetMerchandise Done')
          );
        setTimeout(() => {
          //_access.data = "Timesout";
          //_access.error = "Timesout";
          _Subscribe.unsubscribe();
          observer.next(_access);
          observer.complete();
        }, timeout);
      }, err => console.error('observer : ', err));
    }
  }

  public GetData(option: {
    url?: any,
    token?: any,
    timesout?: number,
    headers?:HttpHeaders
  }): any {
    let url = (option.url != null ? option.url : "http://localhost:44300/api/Merchandise/Search");
    let token = (option.token != null ? option.token : "this.AuthServiceProvider.token");
    let timeout = (option.timesout > 0 ? option.timesout : 4000);
    let headers = (option.headers != null ? option.headers : new HttpHeaders().set('Authorization', token))
    let _Subscribe: any //declaration variable to unsubscribe if any error is occurred
    let _access: any = { access: false, data: [], row: [], md5: [], error: [] }; // value that return to use in another function to determine whether date is complete or not

    if (url === null) { //Check data is valid or not
      return Observable.throw("Please insert url"); //throw "Please insert body"
    }
    else {
      return Observable.create(observer => {
        _Subscribe = this.HttpClient.get<any>(url, {headers: headers}) //Call function PostData from data-service
          .subscribe(
            data => {
              if (data) {
                _access.access = true;
                _access.data = data;
                _access.row = data.row;
                _access.md5 = data.md5;
                observer.next(_access);
                observer.complete();
              }
              else { 
                _access.access = false;
                _access.error = "data is null";
                observer.next(_access);
                observer.error(new Error('GetData Error!'));
                observer.complete();
                _Subscribe.unsubscribe();
              }
            },
            err => {
              _access.access = false;
              _access.data = err;
              _access.error = err;
              observer.next(_access);
              observer.error(new Error(err));
              observer.complete();
              _Subscribe.unsubscribe();
            },//can add function to handle the action of error
            () => { console.log('GetData Done'); } // when get data is completed. It will console.log('GetMerchandise Done')
          );
        setTimeout(() => {
          //_access.data = "Timesout";
          //_access.error = "Timesout";
          _Subscribe.unsubscribe();
          observer.next(_access);
          observer.complete();
        }, timeout);
      }, err => console.error('observer : ', err));
    }
  }



    /////distinct
    public distinct_utc(_ListOfObject) { // utc time distinct
      let _sum = [];
      var mapfoo = _ListOfObject.map(ListOfObject => {
        let index = _sum.findIndex(sum => {
          let sum_time = new Date(sum.deliveryTimes);
          let ListOfObject_time = new Date(ListOfObject.deliveryTimes);
  
          return (sum_time.getDay() == ListOfObject_time.getDay() &&
            sum_time.getMonth() == ListOfObject_time.getMonth() &&
            sum_time.getFullYear() == ListOfObject_time.getFullYear());
        });
        if (index >= 0) { // if in list do something
          //_sum[index].qty += ListOfObject.qty;
          _sum[index].count += 1;
        }
        else {
          _sum.push({ deliveryTimes: ListOfObject.deliveryTimes, count: 1 })// if not in list do some thing
        }
      })
      _sum = _sum.sort((a, b) => a.week - b.week);
      console.log(_sum)//{week: 1, qty: 2, count: 2}, {week: 2, qty: 4, count: 2}
      return _sum;
    }


  //Search
  //filtered:any =[];
  //varfilterall:any = {order:'',filter:'',range:''};
  public filterall(ListOfObject,filter:{order?:any,filter?:any,range?:any,type?:any}){
    console.log("run","filterall()")
    let filtered: any;
    console.log(filter);
    filtered = ListOfObject;
    /* let start;
    let end;
    let now = new Date();
    switch (this.varfilterall.range) {
      case 'today':
          start = new Date(now.setHours(0, 0, 0, 0));
          end = new Date(now.setHours(23, 59, 59, 999));
          break;
      case 'week':
          start = new Date(now.setHours(0, 0, 0, 0));
          end = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
          );
          break;
      case 'all':
          start = new Date(
            now.getFullYear()-(1000),
            now.getMonth(),
            now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
          );
          end = new Date(
            now.getFullYear()+(1000),
            now.getMonth(),
            now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
          );
          break;
      default:
          start = new Date(now.setHours(0, 0, 0, 0));
          end = new Date(now.setHours(23, 59, 59, 999));
          break;
          // range = this.filters.customRange;
          // start = range[0];
          // end = range[1];
      } */
    
    if(filter.filter != ''){
      filtered = filtered.filter(o => o.name.includes(filter.filter));
      console.log("filter");
    }
    if(filter.type != ''){
      filtered = filtered.filter(o => o.type == filter.type);
      console.log("Type");
    }
    if(filter.range != ''){
      filtered = filtered.filter(o => o.range == filter.range);
      console.log("range");
    }

    

    /* if(this.varfilterall.range != ''){
      this.filtered = this.filtered.filter(o =>  Date.parse(o.orderTimes) >= start && Date.parse(o.orderTimes) <= end);
      console.log("date filter");
    } */
    /* if(this.varfilterall.orderIsCanceled == 'true'){
      this.filtered = this.filtered.filter(o => o.orderIsCanceled == true);
      console.log("date orderIsCanceled");
    } */
    
    
    /* if(this.varfilterall.order =='Ascending'){
      this.filtered.sort((n1,n2) => n1.merchandiseQTY - n2.merchandiseQTY)
      console.log("2");
    }
    else if(this.varfilterall.order == 'Descending'){
      this.filtered.sort((n1,n2) => n1.merchandiseQTY - n2.merchandiseQTY).reverse();
      console.log("3");
    } */
    console.log("varfilterall", filtered );
    return filtered;
    
    
  }
//end Search


public filterall_Sale(ListOfObject,filter:{order?:any,filter?:any,range?:any,type?:any}){
  console.log("run","filterall()")
  let filtered: any;
  console.log(filter);
  filtered = ListOfObject;
  /* let start;
  let end;
  let now = new Date();
  switch (this.varfilterall.range) {
    case 'today':
        start = new Date(now.setHours(0, 0, 0, 0));
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
    case 'week':
        start = new Date(now.setHours(0, 0, 0, 0));
        end = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
        );
        break;
    case 'all':
        start = new Date(
          now.getFullYear()-(1000),
          now.getMonth(),
          now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
        );
        end = new Date(
          now.getFullYear()+(1000),
          now.getMonth(),
          now.getDate() + (7 - now.getDay()), 23, 59, 59, 999
        );
        break;
    default:
        start = new Date(now.setHours(0, 0, 0, 0));
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
        // range = this.filters.customRange;
        // start = range[0];
        // end = range[1];
    } */
  
  if(filter.filter != ''){
    filtered = filtered.filter(o => o.name.includes(filter.filter));
    console.log("filter");
  }
  if(filter.type != ''){
    filtered = filtered.filter(o => o.type == filter.type);
    console.log("Type");
  }
  if(filter.range != ''){
    filtered = filtered.filter(o => o.range == filter.range);
    console.log("range");
  }

  

  /* if(this.varfilterall.range != ''){
    this.filtered = this.filtered.filter(o =>  Date.parse(o.orderTimes) >= start && Date.parse(o.orderTimes) <= end);
    console.log("date filter");
  } */
  /* if(this.varfilterall.orderIsCanceled == 'true'){
    this.filtered = this.filtered.filter(o => o.orderIsCanceled == true);
    console.log("date orderIsCanceled");
  } */
  
  
  /* if(this.varfilterall.order =='Ascending'){
    this.filtered.sort((n1,n2) => n1.merchandiseQTY - n2.merchandiseQTY)
    console.log("2");
  }
  else if(this.varfilterall.order == 'Descending'){
    this.filtered.sort((n1,n2) => n1.merchandiseQTY - n2.merchandiseQTY).reverse();
    console.log("3");
  } */
  console.log("varfilterall", filtered );
  return filtered;
  
  
}


}
