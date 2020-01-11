/**
 * 游戏的自调用函数
 * 
 */
		(function () {
				var that = null;//该变量的目的就是为了保存游戏Game的实例对象
				
				//游戏的构造函数
				function Game(map) {
					this.food=new Food();//食物对象
					this.snake=new Snake();//小蛇对象
					this.map=map;//地图
					that = this;//保存当前的实例对象到that变量中-----------------此时that就是this
				}
				//游戏的初始化
				Game.prototype.init=function () {
					//初始化游戏
					this.food.init(this.map);//食物初始化
					this.snake.init(this.map);//小蛇初始化
					// setInterval(function () {
					// 	that.snake.move(that.food,that.map);//小蛇移动
					// 	that.snake.init(that.map);//小蛇初始化
					// },100);
					// 调用自动移动小蛇的方法
					this.runSnake(this.food,this.map);
					//调用按键的方法
					this.bindKey();
				};
				
				
				//添加原型方法,让小蛇可以自动跑起来
				Game.prototype.runSnake=function (food,map) {
					//小蛇自动去移动
					var timeId=setInterval(function () {
						// 定时器的this指向window
						// 移动小蛇
						this.snake.move(food,map);
						// 初始化小蛇
						this.snake.init(map);
						//横坐标的最大值
						var maxX=map.offsetWidth/this.snake.width;
						// 纵坐标的最大值
						var maxY=map.offsetHeight/this.snake.height;
						// 蛇头的坐标
						var headX=this.snake.body[0].x;
						var headY=this.snake.body[0].y;
						// 横坐标
						if (headX<0||headX>=maxX) {
							clearInterval(timeId);
							alert("撒有哪啦");
						}
						
						// 纵坐标
						if (headY<0||headY>=maxY) {
							clearInterval(timeId);
							alert("撒有哪啦");
						}
					}.bind(that),150)
				};
				
				//添加原型方法,获取用户按键,改变小蛇的移动方向
				Game.prototype.bindKey=function () {
					//获取用户的按键,改变小蛇的移动方向
					document.addEventListener("keydown",function (e) {
						//这里的this应该是触发keydown的事件对象--document
						// 所以,这里的this就是document
						
						//获取按键的ASCII码
						switch (e.keyCode){
							case 37:this.snake.direction="left";break;
							case 38:this.snake.direction="top";break;
							case 39:this.snake.direction="right";break;
							case 40:this.snake.direction="bottom";break;
						}
						
						
						
					}.bind(that),false)
				};
				
				
				
				window.Game=Game;
				
			}());


			var gm=new Game(document.querySelector(".map"))
			gm.init();