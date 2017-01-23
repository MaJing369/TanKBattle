class Bullet extends egret.DisplayObjectContainer
{
	private imgBullet:eui.Image;
	private _isHit:boolean;
	private _vo:BulletVo
	
	public constructor(vo:BulletVo)
	{
		super();
		this._vo = vo;
		this.imgBullet = new eui.Image();
		this.imgBullet.source = RES.getRes("bullet_png");
		this.addChild(this.imgBullet);
	}

	public destroy():void
	{
		if(this.imgBullet && this.imgBullet.parent)
		{
			this.imgBullet.parent.removeChild(this.imgBullet);
		}
		this.imgBullet.source = null;
		this.imgBullet = null;
	}

	public move():void
	{
		if(this._vo.direction == GameData.TANKDIR_UP)
		{
			this.y -= this._vo.speed;
		}else if(this._vo.direction == GameData.TANKDIR_RIGHT)
		{
			this.x += this._vo.speed;
		}else if(this._vo.direction == GameData.TANKDIR_DOWN)
		{
			this.y += this._vo.speed;
		}else if(this._vo.direction == GameData.TANKDIR_LEFT)
		{
			this.x -= this._vo.speed;
		}
		Collision.bulletMapCollision(this)
		this.bulletAndBulletCollision();
		this.bulletAndTanKCollision();
	}

	private bulletAndBulletCollision():void
	{
		if(GameData.BYLLET_STAGE_ALLLIST && GameData.BYLLET_STAGE_ALLLIST.length > 0)
		{
			for(var i = 0; i < GameData.BYLLET_STAGE_ALLLIST.length; i++)
			{
				if(GameData.BYLLET_STAGE_ALLLIST[i] != this &&
				this._vo.camp != GameData.BYLLET_STAGE_ALLLIST[i]._vo.camp && //同阵营子弹碰撞不会爆炸 
				Collision.CheckIntersect(this,GameData.BYLLET_STAGE_ALLLIST[i]))this.isHit = true;
			}
		}
	}

	private bulletAndTanKCollision():void
	{

	}

	public get isHit():boolean
	{
		return this._isHit;
	}

	public set isHit(hit:boolean)
	{
		if(this._isHit != hit)this._isHit = hit;
	}

	public get vo():BulletVo
	{
		return this._vo;
	}
}