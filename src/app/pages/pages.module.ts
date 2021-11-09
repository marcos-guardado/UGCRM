import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockComponent } from './stock/stock.component';
import { SoldComponent } from './sold/sold.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { FormsModule } from '@angular/forms';
import { AddGameComponent } from './add-game/add-game.component';

import { AppModule } from '../app.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [StockComponent, SoldComponent, AddGameComponent],
  imports: [CommonModule, NgPrimeModule, FormsModule, ComponentsModule],
  exports: [StockComponent, SoldComponent],
})
export class PagesModule {}
