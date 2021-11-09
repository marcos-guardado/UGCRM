import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGame, IGameInfo } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${environment.baseUrl}/games`);
  }

  getGamesInfo(): Observable<IGameInfo[]> {
    return this.http.get<IGameInfo[]>(`${environment.baseUrl}/fullgamesinfo`);
  }

  getSoldGames(): Observable<IGameInfo[]> {
    return this.http.get<IGameInfo[]>(`${environment.baseUrl}/soldGames`);
  }

  getGameById(gameId: number): Observable<string[]> {
    return this.http.get<string[]>(`${environment.baseUrl}/games/${gameId}`);
  }

  deleteKey(id: number) {
    return this.http.delete(`${environment.baseUrl}/deleteKey/${id}`);
  }

  getKeyId(key: string): Observable<number> {
    return this.http.get<number>(`${environment.baseUrl}/getKeyId/${key}`);
  }
}
