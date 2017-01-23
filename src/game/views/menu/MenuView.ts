class MenuView extends eui.Component
{
    private btnStart:eui.Button;
    public constructor()
    {
        super();
        this.skinName = RES.getRes("Menu_exml");

        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP , this.startGame,this);
    }

    public destroy():void
    {
        this.btnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP , this.startGame,this);
        this.skinName = null;
    }

    private startGame(e:egret.TouchEvent):void
    {
        
    }
}