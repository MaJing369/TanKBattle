class MapScene extends egret.DisplayObjectContainer
{

	private static _instance:MapScene;

	public static MAPHIGHT:number = 468;
	public static MAPWIDTH:number = 468;

	private _wTileCount = 26; //主游戏区的宽度地图块数
	private _hTileCount = 26;//主游戏区的高度地图块数

	private _blockSize = 18;

	private _mapDataAll:Array<any>;
	private _curMapData:Array<any>;
	private _elementNameList:Array<string> = ["","brick_jpg","iron_jpg","water_jpg","ice_jpg","ice_jpg","","","","home_jpg"]
	private _elementList:Array<eui.Image>;

	private _mapShape:egret.Shape;
	public constructor() 
	{
		super();
		
		this._mapShape = new egret.Shape();
		this._mapShape.graphics.beginFill(0x000000);
		this._mapShape.graphics.drawRect(0,0,MapScene.MAPWIDTH,MapScene.MAPHIGHT);
		this._mapShape.graphics.endFill();
		this.addChild(this._mapShape);
	}

	public chageMap(level:number):void
	{
		this.clearCurMap();
		this.createCurMapData(level);
		this.createMapElement();
	}

	private clearCurMap():void
	{
		this._curMapData = [];
		if(this._elementList)
		{
			for(var i = 0; i < this._elementList.length; i++)
			{
				this._elementList[i].source = null;
				if(this._elementList[i].parent)this._elementList[i].parent.removeChild(this._elementList[i]);
				this._elementList[i] = null;
			}
		}
		this._elementList = [];
	}

	private createCurMapData(level:number):void
	{
		var dataList = this.getMapDataList("map"+level)
		for(var i=0;i<dataList.length;i++)
		{
			this._curMapData[i] = []
			for(var j=0;j<dataList[i].length;j++)
			{
				this._curMapData[i][j] = dataList[i][j];
			}
		}
	}

	private createMapElement():void
	{
		for(var i=0;i<this._hTileCount;i++)
		{
			for(var j=0;j<this._wTileCount;j++)
			{
				if(this._curMapData[i][j] != 0)
				{
					this.createElementImg(this._curMapData[i][j],new egret.Point(j*this._blockSize,i*this._blockSize));	
				}
			}
		}
	}

	/**
	 * 更新地图
	 * @param indexArr 需要更新的地图索引数组，二维数组，如[[1,1],[2,2]]
	 * @param target 更新之后的数值
	 */
	public updataElement(list:Array<any>,target:number):void
	{
		var element:eui.Image;
		var index:number;
		var row = list[1];
		var col = list[0];
		for(var i = 0; i < this._elementList.length;i++)
		{
			if(this._elementList[i].x == row*this._blockSize && this._elementList[i].y == col*this._blockSize)
			{
				index = i;
				element = this._elementList[i];
			}
		}
		if(target == 0)
		{
			if(element && element.parent)element.parent.removeChild(element);
			element.source = null;
			element = null;
			this._elementList.splice(index,1)
		}else
		{
			if(element)element.source = this._elementNameList[target]
		}
		this._curMapData[col][row] = target;
	}

	private createElementImg(type:number,point:egret.Point):void
	{
		var brick:eui.Image = new eui.Image();
		brick.source = this._elementNameList[type];
		brick.x = point.x;
		brick.y = point.y;
		this.addChild(brick);
		this._elementList.push(brick);
	}

	private getMapDataList(name:string):Array<any>
	{
		if(!this._mapDataAll)
		{
			this._mapDataAll = RES.getRes("map_json");
		}
		for(var i = 0; i<this._mapDataAll.length; i++)
		{
			if(this._mapDataAll[i]["name"] == name) return this._mapDataAll[i]["data"];
		}
		return null;
	}

	public getCurMapData():Array<string>
	{
		return this._curMapData;
	}

	public static getInstance():MapScene
	{
		if(!this._instance)
		{
			this._instance = new MapScene();
		}
		return this._instance;
	}

}