export enum GameState {
  Backlog,
  Playing,
  Completed,
  Dropped,
  Endless,
  Perfected,
}

export type GameType = {
  game_id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  state: GameState;
  overall_score: number;
  ost_score: number;
  gameplay_score: number;
  story_score: number;
};
