var MapScene = (function (_super) {
    __extends(MapScene, _super);
    function MapScene() {
        _super.call(this);
        this._wTileCount = 26; //主游戏区的宽度地图块数
        this._hTileCount = 26; //主游戏区的高度地图块数
        this._blockSize = 18;
        this._elementNameList = ["", "brick_jpg", "iron_jpg", "water_jpg", "ice_jpg", "ice_jpg", "", "", "", "home_jpg"];
        this._mapShape = new egret.Shape();
        this._mapShape.graphics.beginFill(0x000000);
        this._mapShape.graphics.drawRect(0, 0, MapScene.MAPWIDTH, MapScene.MAPHIGHT);
        this._mapShape.graphics.endFill();
        this.addChild(this._mapShape);
    }
    var d = __define,c=MapScene,p=c.prototype;
    p.chageMap = function (level) {
        this.clearCurMap();
        this.createCurMapData(level);
        this.createMapElement();
    };
    p.clearCurMap = function () {
        this._curMapData = [];
        if (this._elementList) {
            for (var i = 0; i < this._elementList.length; i++) {
                this._elementList[i].source = null;
                if (this._elementList[i].parent)
                    this._elementList[i].parent.removeChild(this._elementList[i]);
                this._elementList[i] = null;
            }
        }
        this._elementList = [];
    };
    p.createCurMapData = function (level) {
        var dataList = this.getMapDataList("map" + level);
        for (var i = 0; i < dataList.length; i++) {
            this._curMapData[i] = [];
            for (var j = 0; j < dataList[i].length; j++) {
                this._curMapData[i][j] = dataList[i][j];
            }
        }
    };
    p.createMapElement = function () {
        for (var i = 0; i < this._hTileCount; i++) {
            for (var j = 0; j < this._wTileCount; j++) {
                if (this._curMapData[i][j] != 0) {
                    this.createElementImg(this._curMapData[i][j], new egret.Point(j * this._blockSize, i * this._blockSize));
                }
            }
        }
    };
    /**
     * 更新地图
     * @param indexArr 需要更新的地图索引数组，二维数组，如[[1,1],[2,2]]
     * @param target 更新之后的数值
     */
    p.updataElement = function (list, target) {
        var element;
        var index;
        var row = list[1];
        var col = list[0];
        for (var i = 0; i < this._elementList.length; i++) {
            if (this._elementList[i].x == row * this._blockSize && this._elementList[i].y == col * this._blockSize) {
                index = i;
                element = this._elementList[i];
            }
        }
        if (target == 0) {
            if (element && element.parent)
                element.parent.removeChild(element);
            element.source = null;
            element = null;
            this._elementList.splice(index, 1);
        }
        else {
            if (element)
                element.source = this._elementNameList[target];
        }
        this._curMapData[col][row] = target;
    };
    p.createElementImg = function (type, point) {
        var brick = new eui.Image();
        brick.source = this._elementNameList[type];
        brick.x = point.x;
        brick.y = point.y;
        this.addChild(brick);
        this._elementList.push(brick);
    };
    p.getMapDataList = function (name) {
        if (!this._mapDataAll) {
            this._mapDataAll = RES.getRes("map_json");
        }
        for (var i = 0; i < this._mapDataAll.length; i++) {
            if (this._mapDataAll[i]["name"] == name)
                return this._mapDataAll[i]["data"];
        }
        return null;
    };
    p.getCurMapData = function () {
        return this._curMapData;
    };
    MapScene.getInstance = function () {
        if (!this._instance) {
            this._instance = new MapScene();
        }
        return this._instance;
    };
    MapScene.MAPHIGHT = 468;
    MapScene.MAPWIDTH = 468;
    return MapScene;
}(egret.DisplayObjectContainer));
egret.registerClass(MapScene,'MapScene');
//# sourceMappingURL=MapScene.js.map