import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockViewPage } from './stock-view';

@NgModule({
  declarations: [
    StockViewPage,
  ],
  imports: [
    IonicPageModule.forChild(StockViewPage),
  ],
})
export class StockViewPageModule {}
