var Render = (function () {
    function Render() {
        this._randerList = [];
        this._randerThisObjList = [];
    }
    var d = __define,c=Render,p=c.prototype;
    /**
     * 注册渲染
     */
    p.register = function (classObj, thisObj) {
        this._randerList.push(classObj);
        this._randerThisObjList.push(thisObj);
        this.TestingRender();
    };
    /**
     * 注销渲染
     */
    p.Cancellation = function (classObj) {
        var idx = this._randerList.indexOf(classObj);
        if (idx >= 0) {
            this._randerList.splice(idx, 1);
        }
        this.TestingRender();
    };
    p.TestingRender = function () {
        if (this._randerList.length > 0 && !this._isStart) {
            LayerManager.getInstance().stage.addEventListener(egret.Event.ENTER_FRAME, this.rendering, this);
        }
        else {
            LayerManager.getInstance().stage.removeEventListener(egret.Event.ENTER_FRAME, this.rendering, this);
        }
    };
    p.rendering = function () {
        var cla;
        var thisObj;
        for (var i = 0; i < this._randerList.length; i++) {
            cla = this._randerList[i];
            thisObj = this._randerThisObjList[i];
            cla.apply(thisObj);
        }
    };
    Render.getInstance = function () {
        if (!this._instance) {
            this._instance = new Render();
        }
        return this._instance;
    };
    return Render;
}());
egret.registerClass(Render,'Render');
//# sourceMappingURL=Render.js.map