class AITanK extends TanK
{
	private _updataLocationTime:number = 0;
	private _fireTime:number = 1;
	private _fireRate:number = 0.4;
	public constructor(vo:TanKVo) 
	{
		super(vo);
	}

	public destroy():void
	{
		super.destroy();
	}

	private move():void
	{
		this.vo.moveX = this.x;
		this.vo.moveY = this.y;
		
		if(this.vo.direction == GameData.TANKDIR_UP)
		{
			this.vo.moveY -= this.vo.speed;
		}else if(this.vo.direction == GameData.TANKDIR_RIGHT)
		{
			this.vo.moveX += this.vo.speed;
		}else if(this.vo.direction == GameData.TANKDIR_DOWN)
		{
			this.vo.moveY += this.vo.speed;
		}else if(this.vo.direction == GameData.TANKDIR_LEFT)
		{
			this.vo.moveX -= this.vo.speed;
		}
		this.vo.isHit = Collision.tankMapCollision(this);
		this._updataLocationTime++;
		if(this.vo.isHit || this._updataLocationTime%100 == 0)
		{
			this.vo.direction = Math.round(Math.random()*3);
			this.vo.isHit = false;
			this._updataLocationTime = 0;
		}else
		{
			this.x = this.vo.moveX;
			this.y = this.vo.moveY;
		}
	}

	public fare():void
	{
		if(this._fireTime %50 ==0)
		{
			var ra = Math.random();
			if(ra < this._fireRate)
			{
				super.fire();
				this._fireTime = 0;
			}
		}
		this._fireTime++;
	}

	public rend():void
	{
		super.rend();
		this.move();
		this.fare();
	}

	
}