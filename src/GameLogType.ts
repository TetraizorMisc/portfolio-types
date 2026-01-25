import { GameScore } from "./GameScore";
import { GameState } from "./GameState";

export type GameLogType = {
  game_log_id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string;
  state: GameState;
  overall_score: number;
  overall_rank: number;
  tags: string[];
  scores: GameScore[];
};
