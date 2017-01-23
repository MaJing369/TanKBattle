var TanKVo = (function () {
    function TanKVo() {
        /**下一步移动位置 */
        this.moveX = 0;
        /**下一步移动位置 */
        this.moveY = 0;
        /**速度 */
        this.speed = 2;
        /**最大射击数量 */
        this.maxBullNum = 1;
        /**坦克资源图片 宽*/
        this.width = 28;
        /**坦克资源图片 高*/
        this.hight = 28;
    }
    var d = __define,c=TanKVo,p=c.prototype;
    return TanKVo;
}());
egret.registerClass(TanKVo,'TanKVo');
//# sourceMappingURL=TanKVo.js.map