
document.addEventListener('DOMContentLoaded', () => new App());

function shuffle(arr: string[]) {
  let ci: number = arr.length, randomIndex;

  while (0 !== ci) {
    randomIndex = Math.floor(Math.random() * ci);
    ci -= 1;
    [arr[ci], arr[randomIndex]] = [arr[randomIndex], arr[ci]];
  }

  return arr;
}

class App {
  flame: HTMLElement;
  cake: HTMLElement;
  bdayMessage: HTMLElement;
  bdayMessages: string[] = [
    'You\'re Awesome! <span>😎</span>',
    'I dig your hairdu! <span>👍<span>',
    'I hear you are a beast on the slopes! <span>⛷️</span>',
    'A Shaper to be inspired by. <span>😇</span>',
    'A leader who makes you feel welcome. <span>😌</span>',
    'Top notch jam manager! <span>🎸🎹🎤<span>',
    'NFL All Pro shaper meeting quarterback. <span>🏈</span>',
    'I value your friendship. <span>👬</span>',
    'I\'m always down for a Charlie story. <span>😆</span>',
    'You\'re always a positive force in the room<span>✌️</span>',
    'Breakfast was awesome at the shaper retreat! <span>🍳</span>',
    'I dig your style! <span>👕👓👖</span>',
    'You always offer to help others when the time comes. <span>☯️</span>',
    'A great steward of the environment! (let it mellow) <span>🌎</span>',
    'You are fun to be around <span>🎉</span>',
    'You have a calming presense and mindfulness <span>☮️♊</span>'
  ];

  private _bdMsgQueue = [];
  private _timeout;
  private _timeoutLn: number = 2500;

  constructor() {
    this.flame = <HTMLElement>document.querySelector('.flame');
    this.cake = <HTMLElement>document.querySelector('.cake');
    this.bdayMessage = <HTMLElement>document.querySelector('.bday-message__text');
    this._attachListeners();
  }

  onCakeClick(e) {
    this.getBdayMessage();
    this._toggleVisibility();
  }

  getBdayMessage() {
    //reset if necessary
    if (this._bdMsgQueue.length === 0) {
      this._bdMsgQueue = [...this.bdayMessages];
    }
    //randomize list
    shuffle(this._bdMsgQueue);
    this.bdayMessage.innerHTML = this._bdMsgQueue.pop();
  }

  private _toggleVisibility() {

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this.flame.classList.add('--hidden')
    this.bdayMessage.classList.remove('--hidden');

    this._timeout = setTimeout(() => {
      this.flame.classList.remove('--hidden');
      this.bdayMessage.classList.add('--hidden');
    }, this._timeoutLn);
  }

  private _attachListeners() {
    this.cake.addEventListener('click', (e) => this.onCakeClick(e));
  }

}


