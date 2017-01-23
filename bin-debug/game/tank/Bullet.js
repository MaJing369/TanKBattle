var Bullet = (function (_super) {
    __extends(Bullet, _super);
    function Bullet(vo) {
        _super.call(this);
        this._vo = vo;
        this.imgBullet = new eui.Image();
        this.imgBullet.source = RES.getRes("bullet_png");
        this.addChild(this.imgBullet);
    }
    var d = __define,c=Bullet,p=c.prototype;
    p.destroy = function () {
        if (this.imgBullet && this.imgBullet.parent) {
            this.imgBullet.parent.removeChild(this.imgBullet);
        }
        this.imgBullet.source = null;
        this.imgBullet = null;
    };
    p.move = function () {
        if (this._vo.direction == GameData.TANKDIR_UP) {
            this.y -= this._vo.speed;
        }
        else if (this._vo.direction == GameData.TANKDIR_RIGHT) {
            this.x += this._vo.speed;
        }
        else if (this._vo.direction == GameData.TANKDIR_DOWN) {
            this.y += this._vo.speed;
        }
        else if (this._vo.direction == GameData.TANKDIR_LEFT) {
            this.x -= this._vo.speed;
        }
        Collision.bulletMapCollision(this);
        this.bulletAndBulletCollision();
        this.bulletAndTanKCollision();
    };
    p.bulletAndBulletCollision = function () {
        if (GameData.BYLLET_STAGE_ALLLIST && GameData.BYLLET_STAGE_ALLLIST.length > 0) {
            for (var i = 0; i < GameData.BYLLET_STAGE_ALLLIST.length; i++) {
                if (GameData.BYLLET_STAGE_ALLLIST[i] != this &&
                    this._vo.camp != GameData.BYLLET_STAGE_ALLLIST[i]._vo.camp &&
                    Collision.CheckIntersect(this, GameData.BYLLET_STAGE_ALLLIST[i]))
                    this.isHit = true;
            }
        }
    };
    p.bulletAndTanKCollision = function () {
    };
    d(p, "isHit"
        ,function () {
            return this._isHit;
        }
        ,function (hit) {
            if (this._isHit != hit)
                this._isHit = hit;
        }
    );
    d(p, "vo"
        ,function () {
            return this._vo;
        }
    );
    return Bullet;
}(egret.DisplayObjectContainer));
egret.registerClass(Bullet,'Bullet');
//# sourceMappingURL=Bullet.js.map