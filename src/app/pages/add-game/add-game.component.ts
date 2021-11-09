import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IGame, IGameInfo } from 'src/app/interfaces/interface';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styles: [
    `
      .addGameForm {
        padding: 1rem;
      }

      label {
        font-weight: bold;
        color: white;
      }
      span {
        cursor: pointer;
      }

      .dropdown {
        text-transform: capitalize;
      }
    `,
  ],
})
export class AddGameComponent implements OnInit {
  addGameForm = this.fb.group({
    game_id: [0],
    game_name: ['', [Validators.required]],
    game_platform: ['', [Validators.required]],
    sale_price: [0, [Validators.required, Validators.min(0)]],
    purchase_price: [0, [Validators.required, Validators.min(0)]],
    game_keys: [[], Validators.required],
    notes: [[], Validators.required],
  });

  platforms = [{ plat_name: 'steam' }, { plat_name: 'origin' }];
  gamesAvailable: IGame[] = [];
  newKey: string = '';
  newNote: string = '';

  constructor(private _service: ServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this._service.getGames().subscribe((games: IGame[]) => {
      this.gamesAvailable = games;
    });
  }

  saveNewGame() {
    console.log(this.addGameForm);
  }
}
