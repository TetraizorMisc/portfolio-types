export enum GameState {
  backlog,
  playing,
  completed,
  dropped,
  endless,
  perfected,
}

export function parseGameState(state: any): GameState {
  let numericState: GameState;

  if (typeof state === "number") {
    numericState = state;
  } else if (typeof state === "string") {
    numericState = (GameState as any)[
      state as keyof typeof GameState
    ] as GameState;

    if (numericState === undefined) {
      console.warn(
        `Warning: "${state}" is not a valid GameState. Defaulting to backlog.`
      );
      numericState = GameState.backlog;
    }
  } else {
    numericState = GameState.backlog;
  }

  return numericState;
}
