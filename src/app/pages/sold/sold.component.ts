import { Component, OnInit } from '@angular/core';
import { IGameInfo } from 'src/app/interfaces/interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styles: [],
})
export class SoldComponent implements OnInit {
  soldGames: IGameInfo[] = [];
  constructor(private dataService: ServiceService) {}

  ngOnInit(): void {
    this.dataService
      .getSoldGames()
      .subscribe((soldGames) => (this.soldGames = soldGames));
  }
}
