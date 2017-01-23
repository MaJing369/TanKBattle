var AITanK = (function (_super) {
    __extends(AITanK, _super);
    function AITanK(vo) {
        _super.call(this, vo);
        this._updataLocationTime = 0;
        this._fireTime = 1;
        this._fireRate = 0.4;
    }
    var d = __define,c=AITanK,p=c.prototype;
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
        this._updataLocationTime++;
        if (this.vo.isHit || this._updataLocationTime % 100 == 0) {
            this.vo.direction = Math.round(Math.random() * 3);
            this.vo.isHit = false;
            this._updataLocationTime = 0;
        }
        else {
            this.x = this.vo.moveX;
            this.y = this.vo.moveY;
        }
    };
    p.fare = function () {
        if (this._fireTime % 50 == 0) {
            var ra = Math.random();
            if (ra < this._fireRate) {
                _super.prototype.fire.call(this);
                this._fireTime = 0;
            }
        }
        this._fireTime++;
    };
    p.rend = function () {
        _super.prototype.rend.call(this);
        this.move();
        this.fare();
    };
    return AITanK;
}(TanK));
egret.registerClass(AITanK,'AITanK');
//# sourceMappingURL=AITanK.js.map