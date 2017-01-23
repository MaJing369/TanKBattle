var GameDispatcher = (function () {
    function GameDispatcher() {
        this._eventDispatcher = new egret.EventDispatcher();
    }
    var d = __define,c=GameDispatcher,p=c.prototype;
    /**
     * 成功注册一个事件侦听器后，无法通过额外调用 on() 来更改其优先级。要更改侦听器的优先级,必须先调用 removeEventListener()。
     * 然后，可以使用新的优先级再次注册该侦听器。注册该侦听器后，如果继续调用具有不同 type 或 useCapture值的 on()，则会创建单独的侦听器注册。
     */
    p.addEventListener = function (type, listener, thisObj, useCapture, priority) {
        this._eventDispatcher.addEventListener(type, listener, thisObj, useCapture, priority);
    };
    p.removeEventListener = function (type, listener, thisObject, useCapture) {
        this._eventDispatcher.removeEventListener(type, listener, thisObject, useCapture);
    };
    p.dispatchEvent = function (event) {
        return this._eventDispatcher.dispatchEvent(event);
    };
    p.hasEventListener = function (type) {
        return this._eventDispatcher.hasEventListener(type);
    };
    GameDispatcher.getInstance = function () {
        if (this._instance == null) {
            this._instance = new GameDispatcher();
        }
        return this._instance;
    };
    return GameDispatcher;
}());
egret.registerClass(GameDispatcher,'GameDispatcher');
//# sourceMappingURL=GameDispatcher.js.map