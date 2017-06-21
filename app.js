document.addEventListener('DOMContentLoaded', function () { return new App(); });
function shuffle(arr) {
    var ci = arr.length, randomIndex;
    while (0 !== ci) {
        randomIndex = Math.floor(Math.random() * ci);
        ci -= 1;
        _a = [arr[randomIndex], arr[ci]], arr[ci] = _a[0], arr[randomIndex] = _a[1];
    }
    return arr;
    var _a;
}
var App = (function () {
    function App() {
        this.bdayMessages = [
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
        this._bdMsgQueue = [];
        this._timeoutLn = 2500;
        this.flame = document.querySelector('.flame');
        this.cake = document.querySelector('.cake');
        this.bdayMessage = document.querySelector('.bday-message__text');
        this._attachListeners();
    }
    App.prototype.onCakeClick = function (e) {
        this.getBdayMessage();
        this._toggleVisibility();
    };
    App.prototype.getBdayMessage = function () {
        //reset if necessary
        if (this._bdMsgQueue.length === 0) {
            this._bdMsgQueue = this.bdayMessages.slice();
        }
        //randomize list
        shuffle(this._bdMsgQueue);
        this.bdayMessage.innerHTML = this._bdMsgQueue.pop();
    };
    App.prototype._toggleVisibility = function () {
        var _this = this;
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        this.flame.classList.add('--hidden');
        this.bdayMessage.classList.remove('--hidden');
        this._timeout = setTimeout(function () {
            _this.flame.classList.remove('--hidden');
            _this.bdayMessage.classList.add('--hidden');
        }, this._timeoutLn);
    };
    App.prototype._attachListeners = function () {
        var _this = this;
        this.cake.addEventListener('click', function (e) { return _this.onCakeClick(e); });
    };
    return App;
}());
