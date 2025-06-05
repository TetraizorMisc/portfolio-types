"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var GameState;
(function (GameState) {
    GameState[GameState["Backlog"] = 0] = "Backlog";
    GameState[GameState["Playing"] = 1] = "Playing";
    GameState[GameState["Completed"] = 2] = "Completed";
    GameState[GameState["Dropped"] = 3] = "Dropped";
    GameState[GameState["Endless"] = 4] = "Endless";
    GameState[GameState["Perfected"] = 5] = "Perfected";
})(GameState || (exports.GameState = GameState = {}));
