var LayerManager = (function () {
    function LayerManager() {
    }
    var d = __define,c=LayerManager,p=c.prototype;
    p.init = function (stage) {
        this.stage = stage;
        this.container = new eui.UILayer();
        this.setTouch(this.container, false, true);
        this.sceneLayer = new egret.DisplayObjectContainer();
        this.setTouch(this.sceneLayer, false, true);
        this.stage.addChild(this.container);
        this.container.addChild(this.sceneLayer);
    };
    p.setTouch = function (dc, selfTouch, childrenTouch) {
        dc.touchEnabled = selfTouch;
        dc.touchChildren = childrenTouch;
    };
    LayerManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new LayerManager();
        }
        return this._instance;
    };
    return LayerManager;
}());
egret.registerClass(LayerManager,'LayerManager');
//# sourceMappingURL=LayerManager.js.map