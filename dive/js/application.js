var game;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function changeGameMode() {
  if (game == null)
    return;
  game.restart();
}

function toggleNextBox() {
  if (game == null)
    return;
  game.restart();
}

function changeStartingSeed() {
  if (game == null)
    return;
  game.restart();
}

function changeBase() {
  if (game == null)
    return;
  game.changeBase();
}