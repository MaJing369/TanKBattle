class GameDispatcher
{
    private static _instance:GameDispatcher;
    private _eventDispatcher:egret.EventDispatcher;

    public constructor()
    {
        this._eventDispatcher = new egret.EventDispatcher();
    }

    /**
     * 成功注册一个事件侦听器后，无法通过额外调用 on() 来更改其优先级。要更改侦听器的优先级,必须先调用 removeEventListener()。
     * 然后，可以使用新的优先级再次注册该侦听器。注册该侦听器后，如果继续调用具有不同 type 或 useCapture值的 on()，则会创建单独的侦听器注册。
     */
    public addEventListener(type:string,listener:Function,thisObj:any,useCapture:boolean,priority:number):void
    {
        this._eventDispatcher.addEventListener(type,listener,thisObj,useCapture,priority)
    }

    public removeEventListener( type:string,listener:Function ,thisObject:any ,useCapture:boolean):void
    {
        this._eventDispatcher.removeEventListener(type,listener,thisObject,useCapture);
    }

    public dispatchEvent(event:egret.Event):boolean 
    { 
        return this._eventDispatcher.dispatchEvent(event); 
    }

    public hasEventListener(type:string):boolean
    {
        return this._eventDispatcher.hasEventListener(type);
    }


    public static getInstance():GameDispatcher
    {
        if(this._instance == null)
        {
            this._instance = new GameDispatcher();
        }
        return this._instance;
    }
}