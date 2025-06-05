export declare enum GameState {
    backlog = 0,
    playing = 1,
    completed = 2,
    dropped = 3,
    endless = 4,
    perfected = 5
}
export declare function parseGameState(state: any): GameState;
