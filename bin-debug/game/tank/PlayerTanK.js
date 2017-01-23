var PlayerTanK = (function (_super) {
    __extends(PlayerTanK, _super);
    function PlayerTanK(vo) {
        _super.call(this, vo);
    }
    var d = __define,c=PlayerTanK,p=c.prototype;
    p.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    p.move = function () {
        this.vo.moveX = this.x;
        this.vo.moveY = this.y;
        if (this.vo.direction == GameData.TANKDIR_UP) {
            this.vo.moveY -= this.vo.speed;
        }
        else if (this.vo.direction == GameData.TANKDIR_RIGHT) {
            this.vo.moveX += this.vo.speed;
        }
        else if (this.vo.direction == GameData.TANKDIR_DOWN) {
            this.vo.moveY += this.vo.speed;
        }
        else if (this.vo.direction == GameData.TANKDIR_LEFT) {
            this.vo.moveX -= this.vo.speed;
        }
        this.vo.isHit = Collision.tankMapCollision(this);
        if (!this.vo.isHit) {
            this.x = this.vo.moveX;
            this.y = this.vo.moveY;
        }
    };
    return PlayerTanK;
}(TanK));
egret.registerClass(PlayerTanK,'PlayerTanK');
//# sourceMappingURL=PlayerTanK.js.map