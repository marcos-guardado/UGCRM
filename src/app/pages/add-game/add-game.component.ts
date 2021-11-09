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

      h2 {
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
    game_name: ['', [Validators.required]],
    codes: this.fb.array([], [Validators.required]),
    purchase_price: [0, [Validators.required, Validators.min(0)]],
    sale_price: [0, [Validators.required, Validators.min(0)]],
    platform: ['', [Validators.required]],
    notes: this.fb.array([], [Validators.required]),
  });

  platforms = [{ plat_name: 'steam' }, { plat_name: 'origin' }];
  gamesAvailable: IGame[] = [];
  newCode: string = '';
  newNote: string = '';

  constructor(private _service: ServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this._service.getGames().subscribe((games: IGame[]) => {
      this.gamesAvailable = games;
    });
  }

  // addNoteToGame(note: string) {
  //   if (note === '' || note.length == 0) return;
  //   this.newGame.notes.push(note);
  //   this.newNote = '';
  // }

  // deleteNote(note: string) {
  //   const newArrNotes: string[] = this.newGame.notes.filter((notes) => {
  //     return notes != note;
  //   });

  //   this.newGame.notes = newArrNotes;
  // }

  // addCodeToGame(code: string) {
  //   if (code === '' || code.length == 0) return;
  //   this.newGame.codes.push(code);
  //   this.newCode = '';
  // }

  // deleteCode(code: string) {
  //   const newArrCodes: string[] = this.newGame.codes.filter((codes) => {
  //     return codes != code;
  //   });
  //   this.newGame.codes = newArrCodes;
  // }

  saveNewGame() {
    console.log(this.addGameForm);
  }
}
