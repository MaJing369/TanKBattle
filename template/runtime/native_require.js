
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"bin-debug/game/collision/Collision.js",
	"bin-debug/game/events/EventsName.js",
	"bin-debug/game/events/GameDispatcher.js",
	"bin-debug/game/Game.js",
	"bin-debug/game/GameData.js",
	"bin-debug/game/manager/LayerManager.js",
	"bin-debug/game/map/MapScene.js",
	"bin-debug/game/tank/TanK.js",
	"bin-debug/game/tank/AITanK.js",
	"bin-debug/game/tank/Bullet.js",
	"bin-debug/game/tank/BulletVo.js",
	"bin-debug/game/tank/PlayerTanK.js",
	"bin-debug/game/tank/TanKVo.js",
	"bin-debug/game/views/loading/LoadingUI.js",
	"bin-debug/game/views/menu/MenuView.js",
	"bin-debug/loader/LoadGuoup.js",
	"bin-debug/Main.js",
	"bin-debug/utils/AssetAdapter.js",
	"bin-debug/utils/KeyBoard.js",
	"bin-debug/utils/Log.js",
	"bin-debug/utils/Render.js",
	"bin-debug/utils/ThemeAdapter.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 800,
		contentHeight: 480,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};