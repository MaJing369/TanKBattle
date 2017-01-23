class GameData
{
	/**砖*/
	public static MAP_BRICK:number = 1;
	/**铁*/
	public static MAP_IRON:number = 2;
	/**草*/
	public static MAP_GRASS:number = 3;
	/**水*/
	public static MAP_WATER:number = 4;
	/**冰*/
	public static MAP_ICE:number = 5;
	/**家的范围*/
	public static MAP_ANOTHREHOME:number=8;
	/**家*/
	public static MAP_HOME:number = 9;

	/**方向 上 */
	public static TANKDIR_UP:number = 0;
	/**方向 右 */
	public static TANKDIR_RIGHT:number = 1;
	/**方向 下 */
	public static TANKDIR_DOWN:number = 2;
	/**方向  左*/
	public static TANKDIR_LEFT:number = 3;

	/**AI坦克出生位置 */
	public static TANK_AI_LOCATION:Array<number> = [220,0,440];
	/**玩家坦克出生位置 */
	public static TANK_PLAYER_LOCATION:Array<number> = [170,270];
	/**坦克阵营 AI */
	public static TANKCAMP_AI:number = 0;
	/**坦克阵营 玩家 */
	public static TANKCAMP_PLAYER:number = 1;
	/**所有添加在舞台的子弹 */
	public static BYLLET_STAGE_ALLLIST:Array<Bullet> = [];
	/**所有添加在舞台的AI坦克 */
	public static TANK_AI_STAGE_ALLLIST:Array<AITanK> = [];
	/**所有添加在舞台的玩家坦克 */
	public static TANK_PLAYER_STAGE_ALLLIST:Array<AITanK> = [];
}