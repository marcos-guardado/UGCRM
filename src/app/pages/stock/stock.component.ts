import { Component, OnInit } from '@angular/core';
import { IGame, IGameInfo } from 'src/app/interfaces/interface';
import { ServiceService } from 'src/app/services/service.service';
import { switchMap } from 'rxjs/operators';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: [],
})
export class StockComponent implements OnInit {
  enableDeleteButtons: boolean = false;
  data: IGameInfo[] = [];
  allGames: IGameInfo[] = [];
  msgs: Message[] = [];

  constructor(
    private dataService: ServiceService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.dataService
      .getGames()
      .pipe(
        switchMap((games) => {
          let allGames: IGame[] = [];
          games.forEach((game) => {
            allGames.push(game);
          });
          return allGames;
        })
      )
      .subscribe(({ game_id }: IGame) => {
        this.getAllGames(game_id);
      });
  }

  getAllGames(id: number) {
    this.dataService.getGameById(id).subscribe((game: any) => {
      this.data.push(game);
    });
  }

  copyKey(key: string) {
    this.confirmationService.confirm({
      message:
        '¿Seguro que deseas copiar la clave? Recuerda que esto eliminará esta clave para siempre',
      header: 'Copiar Clave',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        navigator.clipboard.writeText(key);
        this.dataService
          .getKeyId(key)
          .pipe(
            switchMap((id) => {
              return this.dataService.deleteKey(id);
            })
          )
          .subscribe((x: any) => {
            alert('Key eliminada');
          });
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
}
