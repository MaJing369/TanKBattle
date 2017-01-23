var LoadGroup = (function () {
    function LoadGroup() {
        this._groupList = [];
    }
    var d = __define,c=LoadGroup,p=c.prototype;
    p.load = function (GroupName) {
        this._groupList.push(GroupName);
        if (!this._isLoad) {
            this.addEvents();
            this.starLoad();
        }
    };
    p.addEvents = function () {
        this._isLoad = true;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    };
    p.removeEvents = function () {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    };
    p.starLoad = function () {
        if (this._groupList.length <= 0) {
            this._isLoad = false;
            this.removeEvents();
            return;
        }
        RES.loadGroup(this._groupList.shift());
    };
    p.onResourceLoadComplete = function (event) {
        Log.trace("资源组加载成功：" + event.groupName);
    };
    p.onResourceLoadError = function (event) {
        Log.trace("资源组加载失败：" + event.groupName);
    };
    p.onResourceProgress = function (event) {
        // this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
    };
    p.onItemLoadError = function (event) {
        Log.trace("资源加载失败：" + event.resItem.url);
    };
    LoadGroup.getInstance = function () {
        if (this._instance == null) {
            this._instance = new LoadGroup();
        }
        return this._instance;
    };
    return LoadGroup;
}());
egret.registerClass(LoadGroup,'LoadGroup');
//# sourceMappingURL=LoadGuoup.js.map