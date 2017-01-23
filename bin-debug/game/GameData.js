var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData,p=c.prototype;
    /**砖*/
    GameData.MAP_BRICK = 1;
    /**铁*/
    GameData.MAP_IRON = 2;
    /**草*/
    GameData.MAP_GRASS = 3;
    /**水*/
    GameData.MAP_WATER = 4;
    /**冰*/
    GameData.MAP_ICE = 5;
    /**家的范围*/
    GameData.MAP_ANOTHREHOME = 8;
    /**家*/
    GameData.MAP_HOME = 9;
    /**方向 上 */
    GameData.TANKDIR_UP = 0;
    /**方向 右 */
    GameData.TANKDIR_RIGHT = 1;
    /**方向 下 */
    GameData.TANKDIR_DOWN = 2;
    /**方向  左*/
    GameData.TANKDIR_LEFT = 3;
    /**AI坦克出生位置 */
    GameData.TANK_AI_LOCATION = [220, 0, 440];
    /**玩家坦克出生位置 */
    GameData.TANK_PLAYER_LOCATION = [170, 270];
    /**坦克阵营 AI */
    GameData.TANKCAMP_AI = 0;
    /**坦克阵营 玩家 */
    GameData.TANKCAMP_PLAYER = 1;
    /**所有添加在舞台的子弹 */
    GameData.BYLLET_STAGE_ALLLIST = [];
    /**所有添加在舞台的AI坦克 */
    GameData.TANK_AI_STAGE_ALLLIST = [];
    /**所有添加在舞台的玩家坦克 */
    GameData.TANK_PLAYER_STAGE_ALLLIST = [];
    return GameData;
}());
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map