class Render 
{
	private static _instance:Render;
	private _randerList:Array<Function>;
	private _randerThisObjList:Array<any>;
	private _isStart:boolean;
	public constructor() 
	{
		this._randerList = [];
		this._randerThisObjList = [];
	}

	/**
	 * 注册渲染
	 */
	public register(classObj:Function,thisObj:any):void
	{
		this._randerList.push(classObj);
		this._randerThisObjList.push(thisObj);
		this.TestingRender();
	}

	/**
	 * 注销渲染
	 */
	public Cancellation(classObj:Function):void
	{
		var idx:number = this._randerList.indexOf(classObj);
        if (idx >= 0)
        {
        	this._randerList.splice(idx, 1);
        }
		this.TestingRender();
	}

	private TestingRender():void
	{
		if(this._randerList.length > 0 && !this._isStart)
		{
			LayerManager.getInstance().stage.addEventListener(egret.Event.ENTER_FRAME , this.rendering,this)

		}else
		{
			LayerManager.getInstance().stage.removeEventListener(egret.Event.ENTER_FRAME , this.rendering,this)
		}
	}

	private rendering():void
	{
		var cla:Function;
		var thisObj;
		for(var i= 0; i < this._randerList.length; i++)
		{
			cla = this._randerList[i];
			thisObj = this._randerThisObjList[i];
			cla.apply(thisObj);
		}
	}

	public static getInstance():Render
	{
		if(!this._instance)
		{
			this._instance = new Render();
		}
		return this._instance;
	}
}