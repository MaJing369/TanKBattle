class LoadGroup
{
    private static _instance:LoadGroup;
    private _groupList:Array<string> = [];
    private _isLoad:boolean;

    public load(GroupName:string):void
    {
        this._groupList.push(GroupName);
        if(!this._isLoad)
        {
            this.addEvents();
            this.starLoad();
        } 
    }

    private addEvents():void
    {
        this._isLoad = true;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }

    private removeEvents():void
    {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }

    private starLoad():void
    {
        if(this._groupList.length <= 0)
        {
            this._isLoad = false;
            this.removeEvents();
            return;
        }
        RES.loadGroup(this._groupList.shift());
    }

    private onResourceLoadComplete(event:RES.ResourceEvent):void 
    {
        Log.trace("资源组加载成功："+event.groupName);
    }

    private onResourceLoadError(event:RES.ResourceEvent):void
    {
        Log.trace("资源组加载失败："+event.groupName);
    }

    private onResourceProgress(event:RES.ResourceEvent):void 
    {
        // this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
    }

    private onItemLoadError(event:RES.ResourceEvent):void 
    {
        Log.trace("资源加载失败："+event.resItem.url);
    }

    public static getInstance():LoadGroup
    {
        if(this._instance == null)
        {
            this._instance = new LoadGroup();
        }
        return this._instance;    
    }
}   