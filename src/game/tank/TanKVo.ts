class TanKVo 
{
	 
	public id:number;
	/**血量 */
	public blood:number;
	/**阵营 */
	public camp:number
	/**下一步移动位置 */
	public moveX:number = 0;
	/**下一步移动位置 */
	public moveY:number = 0;
	/**方向 */
	public direction:number;
	/**速度 */
	public speed:number = 2;
	/**是否撞墙 */
	public isHit:boolean;
	/**最大射击数量 */
	public maxBullNum:number = 1;
	/**坦克资源图片 宽*/
	public width = 28;
	/**坦克资源图片 高*/
	public hight = 28

}