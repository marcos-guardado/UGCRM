import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from '../pages/add-game/add-game.component';
import { SoldComponent } from '../pages/sold/sold.component';
import { StockComponent } from '../pages/stock/stock.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StockComponent,
  },
  {
    path: 'sold',
    component: SoldComponent,
  },
  {
    path: 'addGame',
    component: AddGameComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
