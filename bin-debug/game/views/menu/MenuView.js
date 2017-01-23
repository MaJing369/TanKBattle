var MenuView = (function (_super) {
    __extends(MenuView, _super);
    function MenuView() {
        _super.call(this);
        this.skinName = RES.getRes("Menu_exml");
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    }
    var d = __define,c=MenuView,p=c.prototype;
    p.destroy = function () {
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
        this.skinName = null;
    };
    p.startGame = function (e) {
    };
    return MenuView;
}(eui.Component));
egret.registerClass(MenuView,'MenuView');
//# sourceMappingURL=MenuView.js.map