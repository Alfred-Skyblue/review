/**
 * 
 * 小蛇的自调用函数
 * 
 */
(function() {
				var elements = []; //存放小蛇的每个身体部分
				// 小蛇的构造函数
				function Snake(width, height, direction) {
					// 小蛇每一节的宽度
					this.width = width || 20;
					this.height = height || 20;

					// 小蛇的身体
					this.body = [{
							x: 3,
							y: 2,
							color: "red"
						}, //头部
						{
							x: 2,
							y: 2,
							color: "orange"
						}, //身体
						{
							x: 1,
							y: 2,
							color: "orange"
						}, //身体
					];

					// 方向
					this.direction = direction || "right";
				}
				//为原型添加方法--小蛇初始化的方法
				Snake.prototype.init = function(map) {
					remove();
					//循环遍历创建div
					for (var i = 0; i < this.body.length; i++) {
						//数组中每个元素都是一个对象
						var obj = this.body[i];
						// 创建div
						var div = document.createElement("div");
						//把div加入到map地图中
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
						//方向暂时不定

						// 把div加入到elements数组中,方便删除
						elements.push(div);

					}
				};

				// 为原型添加方法,让小蛇动起来
				Snake.prototype.move = function(food, map) {
					var i = this.body.length - 1; //2
					for (; i > 0; i--) {
						this.body[i].x = this.body[i-1].x;
						this.body[i].y = this.body[i-1].y;
					}
					//判断方向,改变蛇头的位置
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

					// 蛇头的横纵坐标
					var headX=this.body[0].x*this.width;
					var headY=this.body[0].y*this.height;
					
					// //判断有没有吃到食物
					if (headX==food.x&&headY==food.y) {
						console.log("真好吃");
						// 获取小蛇的尾巴
						var last=this.body[this.body.length-1];
						// 把最后的一个蛇尾复制一份,重新加入到小蛇的body中
						this.body.push({
							x:last.x,
							y:last.y,
							color:last.color
						});
						// 把食物删除,重新初始化食物
						food.init(map);
					}
					
					
				};
				
				//删除小蛇的方法
				function remove() {
					// 获取数组
					var i = elements.length - 1;
					for(;i>=0;i--){
						//先从当前的子元素中找到该子元素的父级元素,然后再弄死这个子元素
						var ele = elements[i];
						//从map地图上删除这个子元素div
						ele.parentNode.removeChild(ele);
						elements.splice(i, 1);
					}
				}

				//把Snake暴露给window.外部可以访问
				window.Snake = Snake;

			}());