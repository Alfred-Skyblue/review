/**
 * 游戏的自调用函数
 * 
 */
		(function () {
				
				var that=null;
				// 游戏的自调用函数
				function Game(map) {
					this.food=new Food();//食物对象
					this.snake=new Snake();//游戏对象
					this.map=map;//地图
					that=this;
				}
				
				//添加原型方法,初始化游戏
				Game.prototype.init=function () {
					// 初始化游戏
					this.food.init(this.map);
					this.snake.init(this.map);
					
					//调用小蛇自动移动的方法
					this.runSnake(this.food,this.map);
					//调用按键的方法
					this.bindKey();
					
				};
				
				// 添加原型方法--设置小蛇可以自动跑起来
				Game.prototype.runSnake=function (food,map) {
					//自动的去移动
					var timeId=setInterval(function () {
						// 此时的this是window
						// 移动小蛇
						this.snake.move(food,map)
						//初始化小蛇
						this.snake.init(map);
						//横坐标最大值
						var maxX=map.offsetWidth/this.snake.width;
						// 纵坐标最大值
						var maxY=map.offsetHeight/this.snake.height;
						//蛇头的坐标
						var headX=this.snake.body[0].x;
						var headY=this.snake.body[0].y;
						// 判断有没有撞墙
						if (headX<0||headX>=maxX) {
							//表示已经撞墙了,停止定时器
							clearInterval(timeId);
							alert("可能我撞了南墙才会回头吧");
						}
						if (headY<0||headY>=maxY) {
							//表示已经撞墙了,停止定时器
							clearInterval(timeId);
							alert("可能我见了黄河才会死心吧");
						}
						
						
						
						
					}.bind(that),150);
				};
				
				Game.prototype.bindKey=function () {
					//获取用户的按键,改变小蛇的移动方向
					document.addEventListener("keydown",function (e) {
						//获取按键的值
						switch (e.keyCode){
							case 37:this.snake.direction="left";break;
							case 38:this.snake.direction="top";break;
							case 39:this.snake.direction="right";break;
							case 40:this.snake.direction="bottom";break;
						}
					}.bind(that),false);
				};
				
				window.Game=Game;
				
			}());
