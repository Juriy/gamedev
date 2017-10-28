
class RpsGame {

  constructor(p1, p2) {
    this._p1 = p2;
    this._p2 = p2;

    [p1, p2].forEach(s => s.emit('message', 'Rock Paper Scissors Starts!'));
  }
}

module.exports = RpsGame;