/**
 * //食物的自调用函数
 */
(function() {
				//用来保存每个小方块的食物
				var elements = [];

				// 食物就是一个对象,有宽,有高,有颜色,有坐标,先定义构造函数,然以后创建对象
				function Food(x, y, width, height, color) {
					// 横纵坐标
					this.x = x || 0;
					this.y = y || 0;
					// 宽和高
					this.width = width || 20;
					this.height = height || 20;
					// 背景颜色
					this.color = color || "blue";
				}
				window.Food = Food;
				//为原型添加初始化的方法,在页面中显示食物
				Food.prototype.init = function(map) {
					//先删除一次小食物
					remove();
					// 创建div
					var div = document.createElement("div");
					// 把div加入到map中
					map.appendChild(div);
					// 设置div的样式
					div.style.width = this.width + "px";
					div.style.height = this.height + "px";
					div.style.backgroundColor = this.color;
					// 脱标
					div.style.position = "absolute";
					// 横纵坐标随机产生
					this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
					this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
					div.style.left = this.x + "px";
					div.style.top = this.y + "px";
					// 把div加入到数组elements中
					elements.push(div);
				};

				// 私有的函数,删除食物用
				function remove() {
					//elements数组中有这个食物

					for (var i = 0; i < elements.length; i++) {
						var ele = elements[i];
						// 找到这个子元素的父级元素,然后删除这个子元素
						ele.parentNode.removeChild(ele);
						// 再次把elements中的这个子元素也要删除
						elements.splice(i, 1);

					}
				}
			}());