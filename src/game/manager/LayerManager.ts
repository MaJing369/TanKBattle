class LayerManager
{
	private static _instance:LayerManager;

	public stage:egret.Stage;
	public container:eui.UILayer;
	public sceneLayer:egret.DisplayObjectContainer;
	public init(stage:egret.Stage):void
	{
		this.stage = stage;
		this.container = new eui.UILayer();
		this.setTouch(this.container,false,true);

		this.sceneLayer = new egret.DisplayObjectContainer();
		this.setTouch(this.sceneLayer,false,true)

		this.stage.addChild(this.container)
		this.container.addChild(this.sceneLayer);
	}

	private setTouch(dc:egret.DisplayObjectContainer, selfTouch:boolean, childrenTouch:boolean):void
    {
        dc.touchEnabled = selfTouch;
        dc.touchChildren = childrenTouch;
    }

	public static getInstance():LayerManager
	{
		if(this._instance == null)
		{
			this._instance = new LayerManager();
		}
		return this._instance;
	}
}