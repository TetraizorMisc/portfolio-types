"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
exports.parseGameState = parseGameState;
var GameState;
(function (GameState) {
    GameState[GameState["backlog"] = 0] = "backlog";
    GameState[GameState["playing"] = 1] = "playing";
    GameState[GameState["completed"] = 2] = "completed";
    GameState[GameState["dropped"] = 3] = "dropped";
    GameState[GameState["endless"] = 4] = "endless";
    GameState[GameState["perfected"] = 5] = "perfected";
})(GameState || (exports.GameState = GameState = {}));
function parseGameState(state) {
    let numericState;
    if (typeof state === "number") {
        numericState = state;
    }
    else if (typeof state === "string") {
        numericState = GameState[state];
        if (numericState === undefined) {
            console.warn(`Warning: "${state}" is not a valid GameState. Defaulting to backlog.`);
            numericState = GameState.backlog;
        }
    }
    else {
        numericState = GameState.backlog;
    }
    return numericState;
}
