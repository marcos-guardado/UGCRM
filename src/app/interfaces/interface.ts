export interface ICodes {
  code: string;
}

export interface IGameInfo {
  game_id?: number;
  game_name: string;
  game_keys: string[];
  game_platform: string;
  purchase_price: number;
  sale_price: number;
  notes: string[];
  soldAt?: string;
}

export interface IGame {
  game_id: number;
  game_name: string;
}
