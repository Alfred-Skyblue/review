			// 小蛇的自调用函数
			(function() {
				var elements = []; //存放小蛇的每个身体部分

				//小蛇的构造函数
				function Snake(width, height, direction) {
					//小蛇的每个部分的宽度
					this.width = width || 20;
					this.height = height || 20;
					// 小蛇的身体
					this.body = [{
							x: 3,
							y: 2,
							color: "red"
						},
						{
							x: 2,
							y: 2,
							color: "orange"
						},
						{
							x: 1,
							y: 2,
							color: "orange"
						},
					];

					//方向
					this.direction = direction || "right";

				}

				//为原型添加小蛇初始化的方法
				Snake.prototype.init = function(map) {
					remove();
					var snaWidth = this.width;
					var snatHeight = this.height;
					this.body.forEach(function(ele, i) {
						var div = document.createElement("div");
						//加入到地图中
						map.appendChild(div);
						//设置定位

						div.style.position = "absolute";
						//宽度高度背景颜色
						div.style.width = snaWidth + "px";
						div.style.height = snatHeight + "px";
						// 横纵坐标
						div.style.left = ele.x * snaWidth + "px";
						div.style.top = ele.y * snatHeight + "px";
						// 背景颜色
						div.style.backgroundColor = ele.color;
						//把div加入到element数组中
						elements.push(div)
					})
				};

				// 添加原型方法,让小蛇动起来
				Snake.prototype.move = function(food,map) {

					//改变蛇身的坐标
					var i = this.body.length - 1;
					for (; i > 0; i--) {
						this.body[i].x = this.body[i - 1].x;
						this.body[i].y = this.body[i - 1].y;
					}
					//判断蛇头的方向,改变蛇头的位置
					switch (this.direction) {
						case "right":
							this.body[0].x += 1;
							break;
						case "left":
							this.body[0].x -= 1;
							break;
						case "top":
							this.body[0].y -= 1;
							break;
						case "bottom":
							this.body[0].y += 1;
							break;
					}
					
					//判断有没有吃到食物
					var headX=this.body[0].x*this.width;
					var headY=this.body[0].y*this.height;
					// 判断小蛇的坐标和食物的坐标是否相同
					if (headX==food.x&&headY==food.y) {
						//获取小蛇的尾巴
						var last=this.body[this.body.length-1];
						// 把最后的这个蛇尾复制一份,重新加入到小蛇的身体中
						this.body.push({
							x:last.x,
							y:last.y,
							color:last.color
						});
						// 把食物删除,并且重新初始化食物
						food.init(map);
					}
					console.log(food);
				};
				
				//删除小蛇的函数
				function remove() {
					// 获取数组
					var i=elements.length-1;
					for(;i>=0;i--){
						//先从数组中找到元素,然后在找到元素的父元素,然后删除这个子元素
						var ele=elements[i];
						ele.parentNode.removeChild(ele);
						elements.splice(i,1)
;					}
				}
				
				window.Snake = Snake;

			}());
