			//游戏的自调用函数
			(function () {
				var that=null;
				
				//游戏的构造函数
				function Game(map) {
					this.food=new Food();//食物对象
					this.snake=new Snake();//小蛇对象
					this.map=map;//地图
					that=this;
				}
				
				// 添加游戏初始化的原型方法
				Game.prototype.init=function () {
					//初始化游戏
					//初始化食物
					this.food.init(this.map);
					//初始化小蛇
					this.snake.init(this.map);
					
					// 调用自动移动小蛇的方法
					this.runSnake(this.food,this.map);
					//调用按键的方法
					this.bindKey();
				};

				//添加原型方法,让小蛇自己动起来
				Game.prototype.runSnake=function (food,map) {
					// 自动的移动
					var timeId=setInterval(function () {
						// 此时的this是window
						
						// 移动小蛇
						this.snake.move(food,map);
						// 初始化小蛇
						this.snake.init(map);
						//横纵坐标最大值
						var maxX=map.offsetWidth/this.snake.width;
						var maxY=map.offsetHeight/this.snake.height;
						
						// 蛇头的坐标
						var headX=this.snake.body[0].x;
						var headY=this.snake.body[0].y;
						if (headX<0||headX>=maxX) {
							// 撞墙了停止定时器
							clearInterval(timeId);
							alert("凉了");
						}
						if (headY<0||headY>=maxY) {
							// 撞墙了停止定时器
							clearInterval(timeId);
							alert("凉了");
						}
						
					}.bind(that),150);
				};
				
				//添加原型方法,判断用户按键,改变小蛇的移动方向
				Game.prototype.bindKey=function () {
					//这里的this应该是触发keydown的事件的对象document
					//所以,这里的this就是document
					//获取用户的按键,改变小蛇的方向
					document.addEventListener("keydown",function (e) {
						//获取按键的值
						switch(e.keyCode){
							case 37:this.snake.direction="left";break;
							case 38:this.snake.direction="top";break;
							case 39:this.snake.direction="right";break;
							case 40:this.snake.direction="bottom";break;
						}
					}.bind(that),false)
				};
				
				window.Game=Game;
			}());
