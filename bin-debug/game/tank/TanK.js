var TanK = (function (_super) {
    __extends(TanK, _super);
    function TanK(vo) {
        _super.call(this);
        this._tanKSourceName = ["tank_0_png", "tank_1_png", "tank_2_png", "tank_3_png", "tank_4_png", "tank_5_png", "tank_6_png"];
        this._vo = vo;
        this._bulletList = [];
        this._tanKImg = new eui.Image();
        this._tanKImg.x = this._tanKImg.y = this._tanKImg.anchorOffsetX = this._tanKImg.anchorOffsetY = 14;
        this._tanKImg.source = RES.getRes(this._tanKSourceName[this._vo.id]);
        this.addChild(this._tanKImg);
        Render.getInstance().register(this.rend, this);
    }
    var d = __define,c=TanK,p=c.prototype;
    p.destroy = function () {
        Render.getInstance().Cancellation(this.rend);
        this._tanKSourceName.slice(0, this._tanKSourceName.length - 1);
        this._tanKSourceName = null;
        if (this._tanKImg.parent) {
            this._tanKImg.parent.removeChild(this._tanKImg);
        }
        this._tanKImg.source = null;
        this._tanKImg = null;
        for (var i = 0; i < this._bulletList.length; i++) {
            if (this._bulletList[i] && this._bulletList[i].parent)
                this._bulletList[i].parent.removeChild(this._bulletList[i]);
            this._bulletList[i].destroy();
            this._bulletList[i] = null;
        }
        this._bulletList.length = 0;
        this._bulletList = null;
    };
    /**设置方向 */
    p.setDirection = function () {
        if (this._vo.direction == GameData.TANKDIR_UP) {
            this._tanKImg.rotation = 0;
        }
        else if (this._vo.direction == GameData.TANKDIR_RIGHT) {
            this._tanKImg.rotation = 90;
        }
        if (this._vo.direction == GameData.TANKDIR_DOWN) {
            this._tanKImg.rotation = 180;
        }
        if (this._vo.direction == GameData.TANKDIR_LEFT) {
            this._tanKImg.rotation = 270;
        }
    };
    p.fire = function () {
        if (this._bulletList.length >= this._vo.maxBullNum)
            return;
        var bulVo = new BulletVo();
        bulVo.direction = this._vo.direction;
        bulVo.camp = this._vo.camp;
        bulVo.speed = this._vo.speed + 1;
        var bullet = new Bullet(bulVo);
        if (this._vo.direction == GameData.TANKDIR_UP) {
            bullet.x = this.x + (this._vo.width - bullet.vo.width) / 2;
            bullet.y = this.y;
        }
        else if (this._vo.direction == GameData.TANKDIR_RIGHT) {
            bullet.x = this.x + this._vo.width;
            bullet.y = this.y + (this._vo.hight - bullet.vo.hight) / 2;
        }
        if (this._vo.direction == GameData.TANKDIR_DOWN) {
            bullet.x = this.x + (this._vo.width - bullet.vo.width) / 2;
            bullet.y = this.y + this._vo.hight;
        }
        if (this._vo.direction == GameData.TANKDIR_LEFT) {
            bullet.x = this.x;
            bullet.y = this.y + (this._vo.hight - bullet.vo.hight) / 2;
        }
        LayerManager.getInstance().sceneLayer.addChild(bullet);
        this._bulletList.push(bullet);
    };
    p.clearBullet = function (bullet) {
        var bul;
        var num;
        for (var i = 0; i < this._bulletList.length; i++) {
            if (this._bulletList[i] && this._bulletList[i] == bullet) {
                num = i;
                bul = bullet;
                break;
            }
            this._bulletList.slice();
        }
        if (bul && bul.parent) {
            bul.parent.removeChild(bul);
            bul.destroy();
            bul = null;
            this._bulletList.splice(i, 1);
        }
    };
    d(p, "vo"
        ,function () {
            return this._vo;
        }
    );
    p.rend = function () {
        this.setDirection();
        for (var i = 0; i < this._bulletList.length; i++) {
            if (this._bulletList[i].isHit) {
                this.clearBullet(this._bulletList[i]);
            }
            else {
                this._bulletList[i].move();
            }
        }
    };
    return TanK;
}(egret.DisplayObjectContainer));
egret.registerClass(TanK,'TanK');
//# sourceMappingURL=TanK.js.map