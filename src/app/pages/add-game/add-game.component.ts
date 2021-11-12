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
  platforms = [{ plat_name: 'steam' }, { plat_name: 'origin' }];
  gamesAvailable: IGame[] = [];
  newKey: string = '';
  newNote: string = '';

  addGameForm = this.fb.group({
    game_id: [0],
    game_platform: ['', [Validators.required, Validators.minLength(1)]],
    sale_price: [0, [Validators.required, Validators.min(0)]],
    purchase_price: [0, [Validators.required, Validators.min(0)]],
    game_keys: [[], Validators.required],
    notes: [[], Validators.required],
  });

  constructor(private _service: ServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this._service.getGames().subscribe((games: IGame[]) => {
      this.gamesAvailable = games;
    });
  }

  generateNewGameObject() {
    const {
      game_id,
      game_platform,
      sale_price,
      purchase_price,
      game_keys,
      notes,
    } = this.addGameForm.controls;

    const newGame = {
      game_id: game_id.value,
      game_name: '',
      game_platform: game_platform.value,
      sale_price: sale_price.value,
      purchase_price: purchase_price.value,
      game_keys: game_keys.value,
      notes: notes.value,
    };

    const gameName = this.gamesAvailable.filter((game: any) => {
      if (game.game_id === newGame.game_id) {
        return game;
      }
    });

    newGame.game_name = gameName[0].game_name;

    return newGame;
  }

  saveNewGame() {
    if (this.addGameForm.valid) {
      const newGame = this.generateNewGameObject();
      this._service.saveGame(newGame).subscribe((message) => {
        alert(message);
      });
      this.addGameForm.reset();
    }
  }

  isInvalidField(field: string) {
    return (
      this.addGameForm.controls[field].errors &&
      this.addGameForm.controls[field].touched
    );
  }
}
