class PlayerTanK extends TanK
{
	public constructor(vo:TanKVo) 
	{
		super(vo)
	}

	public destroy():void
	{
		super.destroy();
	}

	public move():void
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
		if(!this.vo.isHit)
		{
			this.x = this.vo.moveX;
			this.y = this.vo.moveY;
		}
	}

}