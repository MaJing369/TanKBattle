class Collision 
{

	/**
 	* 检测2个物体是否碰撞
 	* @param object1 物体1
 	* @param object2 物体2
 	* @param overlap 允许重叠的大小
 	* @returns {Boolean} 如果碰撞了，返回true
 	*/
	public static CheckIntersect(obj_1:any,obj_2:any,overlap:number = 0):boolean
	{
		//    x-轴                      x-轴
		//  A1------>B1 C1              A2------>B2 C2
		//  +--------+   ^              +--------+   ^
		//  | object1|   | y-轴         | object2|   | y-轴
		//  |        |   |              |        |   |
		//  +--------+  D1              +--------+  D2
		//
		//overlap是重叠的区域值
		var A1 = obj_1.x + overlap;
		var B1 = obj_1.x + obj_1.size - overlap;
		var C1 = obj_1.y + overlap;
		var D1 = obj_1.y + obj_1.size - overlap;
 
		var A2 = obj_2.x + overlap;
		var B2 = obj_2.x + obj_2.size - overlap;
		var C2 = obj_2.y + overlap;
		var D2 = obj_2.y + obj_2.size - overlap;
		//假如他们在x-轴重叠
		if(A1 >= A2 && A1 <= B2 || B1 >= A2 && B1 <= B2)
		{
			//判断y-轴重叠
			if(C1 >= C2 && C1 <= D2 || D1 >= C2 && D1 <= D2)
			{
				return true;
			}
		}
		return false;
	}

	/**坦克与地图碰撞 */
	public static tankMapCollision(tank:TanK):boolean
	{
		var rowIndex = 0;
		var colIndex = 0;
		var rowIndex_1 = 0;
		var colIndex_1 = 0;
		var mapData = MapScene.getInstance().getCurMapData();
		if(tank.vo.direction == GameData.TANKDIR_UP || tank.vo.direction == GameData.TANKDIR_DOWN)
		{
			if(tank.vo.moveY <= 0 || tank.vo.moveY + tank.vo.hight >= MapScene.MAPHIGHT)return true;
			if(tank.vo.direction == GameData.TANKDIR_UP)
			{
				rowIndex = Math.floor(tank.vo.moveY/18);
				colIndex = Math.floor((tank.vo.moveX)/18);
				rowIndex_1 = rowIndex;
				colIndex_1 = Math.floor((tank.vo.moveX+tank.vo.width)/18);
				
			}else
			{
				rowIndex = Math.floor((tank.vo.moveY+tank.vo.hight)/18);
				colIndex = Math.floor(tank.vo.moveX/18);
				rowIndex_1 = rowIndex;
				colIndex_1 = Math.floor((tank.vo.moveX+tank.vo.width)/18);
			}
			if(mapData[rowIndex][colIndex] || mapData[rowIndex_1] && mapData[rowIndex_1][colIndex_1])return true;
		}else if(tank.vo.direction == GameData.TANKDIR_RIGHT || tank.vo.direction == GameData.TANKDIR_LEFT)
		{
			if(tank.vo.moveX + tank.vo.width >= MapScene.MAPWIDTH || tank.vo.moveX <= 0)return true;
			if(tank.vo.direction == GameData.TANKDIR_RIGHT)
			{
				rowIndex = Math.floor(tank.vo.moveY/18);
				colIndex = Math.floor((tank.vo.moveX+tank.vo.width)/18);
				rowIndex_1 = Math.floor((tank.vo.moveY+tank.vo.hight)/18);
				colIndex_1 = colIndex;
			}else
			{
				rowIndex = Math.floor((tank.vo.moveY)/18);
				colIndex = Math.floor(tank.vo.moveX/18);
				rowIndex_1 = Math.floor((tank.vo.moveY+tank.vo.hight)/18);
				colIndex_1 = colIndex;
			}
			if(mapData[rowIndex][colIndex] || mapData[rowIndex_1] && mapData[rowIndex_1][colIndex_1])return true;
		}
		return false;
	}

	public static bulletMapCollision(bullet:Bullet):void
	{
		var rowIndex = 0;
		var colIndex = 0;
		if(bullet.vo.direction == GameData.TANKDIR_UP || bullet.vo.direction == GameData.TANKDIR_DOWN)
		{
			if(bullet.y <= 0 || bullet.y + bullet.vo.hight >= MapScene.MAPHIGHT)
			{
				bullet.isHit = true
				return;
			}
			if(bullet.vo.direction == GameData.TANKDIR_UP)
			{
				rowIndex = Math.floor(bullet.y/18);
				colIndex = Math.floor((bullet.x+bullet.vo.width/2)/18);
			}else
			{
				rowIndex = Math.floor((bullet.y+bullet.vo.hight)/18);
				colIndex = Math.floor((bullet.x+bullet.vo.width/2)/18);
			}
			
		}else if(bullet.vo.direction == GameData.TANKDIR_RIGHT || bullet.vo.direction == GameData.TANKDIR_LEFT)
		{
			if(bullet.x + bullet.vo.width >= MapScene.MAPWIDTH || bullet.x <= 0)
			{
				bullet.isHit = true
				return;
			}
			if(bullet.vo.direction == GameData.TANKDIR_RIGHT)
			{
				rowIndex = Math.floor((bullet.y+bullet.vo.width/2)/18);
				colIndex = Math.floor((bullet.x+bullet.vo.width)/18);
			}else
			{
				rowIndex = Math.floor((bullet.y+bullet.vo.hight/2)/18);
				colIndex = Math.floor(bullet.x/18);
			}
		}
		var mapData = MapScene.getInstance().getCurMapData();
		var element:number = Number(mapData[rowIndex][colIndex]);
		if(element == GameData.MAP_IRON || element == GameData.MAP_BRICK || element == GameData.MAP_HOME || element == GameData.MAP_ANOTHREHOME)
		{
			bullet.isHit = true;
			if(element == GameData.MAP_BRICK)
			{
				MapScene.getInstance().updataElement([rowIndex,colIndex],0);
			}
		}	
	}
}