/**
 * 小蛇的自调用函数
 * 
 */
		(function() {
				var elements = []; //存放小蛇的每一个部位
				//小蛇的构造函数
				function Snake(width, height, direction) {
					// 小蛇的每一节的宽和高
					this.width = width || 20;
					this.height = height || 20;

					//小蛇的身体
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
						}
					];
					// 设置默认的方向
					this.direction = direction || "right";

				}

				//为原型添加小蛇初始化的方法
				Snake.prototype.init = function(map) {
					remove();
					// 循环遍历创建div
					for (var i = 0; i < this.body.length; i++) {
						var obj = this.body[i];

						//创建div
						var div = document.createElement("div");
						// 把div加入到map地图中
						map.appendChild(div);
						// 设置div的样式
						div.style.position = "absolute";
						div.style.width = this.width + "px";
						div.style.height = this.height + "px";
						// 横纵坐标
						div.style.left = obj.x * this.width + "px";
						div.style.top = obj.y * this.height + "px";
						// 背景颜色
						div.style.backgroundColor = obj.color;


						//把div加入到elememts数组中,目的是为了删除div
						elements.push(div);
					}
				};


				//为原型添加方法,让小蛇动起来
				Snake.prototype.move = function(food, map) {
					//改变小蛇的身体的坐标位置
					var i = this.body.length - 1;
					for (; i > 0; i--) {
						this.body[i].x = this.body[i - 1].x;
						this.body[i].y = this.body[i - 1].y;
					}
					//判断方向—————改变小蛇的头的坐标位置
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
					//蛇头和食物坐标一致
					var headX=this.body[0].x*this.width;
					var headY=this.body[0].y*this.height;
					
					//食物的坐标
					var foodX=food.x;
					var foodY=food.y;
					if (headX==food.x&&headY==food.y) {
						// 获取小蛇的尾巴
						var last=this.body[this.body.length-1];
						// 把最后的蛇尾,复制一份,重新加入到小蛇的body中
						this.body.push({
							x:last.x,
							y:last.y,
							color:last.color
						});
						// 初始化这个食物
						food.init(map);
					}
					
				};
				
				function remove() {
					// 获取数组
					var i=elements.length-1;
					for(;i>=0;i--){
						//先从当前的子元素中找到该子元素的父级元素,然后在删除这个子元素
						var ele=elements[i];
						ele.parentNode.removeChild(ele);
						elements.splice(i,1);
					}
				}


				//把Snake暴露给window
				window.Snake = Snake;

			}());
