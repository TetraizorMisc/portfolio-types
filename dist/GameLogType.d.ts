export declare enum GameState {
    Backlog = 0,
    Playing = 1,
    Completed = 2,
    Dropped = 3,
    Endless = 4,
    Perfected = 5
}
export type GameLogType = {
    game_log_id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    state: GameState;
    overall_score: number;
    ost_score: number;
    gameplay_score: number;
    story_score: number;
    tags: string[];
};
