class Game extends egret.DisplayObjectContainer
{
	private _mene:MenuView;
	private _map:MapScene;

	private _maxAITanK = 20;
	private _maxAddAITank = 5;
	private _curAddAITanK = 0;
	private _mainFrame = 0;


	private playertank:PlayerTanK;

	private tanKNumText:eui.Label;

	public constructor() 
	{
		super();
		this.init();
	}

	public destroy():void
	{
	}

	private init():void
	{

		this._mene = new MenuView();
		// this.addChild(this._mene);

		this._map = MapScene.getInstance();
		this.addChild(this._map);
		this._map.chageMap(1);

		var tanKVo = new TanKVo();
		tanKVo.id = 2;
		tanKVo.blood = 1;
		tanKVo.camp = GameData.TANKCAMP_PLAYER;
		tanKVo.speed = 2.5;
		tanKVo.direction = GameData.TANKDIR_UP
		this.playertank = new PlayerTanK(tanKVo)
		this.playertank.x = GameData.TANK_PLAYER_LOCATION[1];
		this.playertank.y = 440;
		this.addChild(this.playertank);
		

		this.startGame();

		var keyBoard = new KeyBoard();
        keyBoard.addEventListener(KeyBoard.onkeydown, this.playerRun, this);

		this.tanKNumText = new eui.Label();
		this.addChild(this.tanKNumText);
	}

	private clearMenu():void
	{
		this._mene.destroy();
		this._mene = null;
	}

	private startGame():void
	{
		Render.getInstance().register(this.render,this);
	}

	private stopGame():void
	{
		Render.getInstance().Cancellation(this.render);
	}

	private gameOver():void
	{
		
	}

	private playerRun(e):void
	{
		if (e.data == "A")
		{
			this.playertank.vo.direction = GameData.TANKDIR_LEFT;
			this.playertank.move();
		}
		if (e.data == "D") 
		{
			this.playertank.vo.direction = GameData.TANKDIR_RIGHT;
			this.playertank.move();
		}
		if (e.data == "W")
		{
			this.playertank.vo.direction = GameData.TANKDIR_UP;
			this.playertank.move();
		}
		if (e.data == "S") 
		{
			this.playertank.vo.direction = GameData.TANKDIR_DOWN;
			this.playertank.move();
		}
		if (e.data == "Enter") 
		{
			this.playertank.fire();
		}
	}

	private createAITanK():void
	{
		if(this._curAddAITanK >= this._maxAITanK)return;

		this._curAddAITanK++;
		this.tanKNumText.text = "坦克数量"+this._curAddAITanK
		var rand = Math.round(Math.random() * 3);

		var tanKVo = new TanKVo();
		tanKVo.id = rand;
		tanKVo.blood = 1;
		tanKVo.camp = GameData.TANKCAMP_AI;
		tanKVo.speed = 1.6;
		tanKVo.direction = GameData.TANKDIR_DOWN
		
		var tanK = new AITanK(tanKVo);
		this.addChild(tanK);
		tanK.x = GameData.TANK_AI_LOCATION[Math.round(Math.random() * 2)];
		tanK.y = 0;
	}

	private render():void
	{
		if(this._curAddAITanK<this._maxAITanK)
		{
			if(this._mainFrame % 60 == 0)
			{
				this.createAITanK();
				this._mainFrame = 0;
			}
			this._mainFrame++;
		}
	}
	
}