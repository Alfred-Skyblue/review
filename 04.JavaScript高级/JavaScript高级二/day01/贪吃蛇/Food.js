			//食物的自调用函数
			(function() {
				var elements = []; //用来保存每个小方块食物的

				//食物就是一个对象,有宽度,有高度,有颜色,有横纵坐标,先定义构造函数,然后创建对象
				function Food(x, y, width, height, color) {
					//横纵坐标
					this.x = x || 0;
					this.y = y || 0;
					//宽和高
					this.width = width || 20;
					this.height = height || 20;
					// 背景颜色
					this.color = color || "green";
				}
				//为原型添加初始化的方法,在页面中显示这个食物
				//因为食物需要在地图上面显示,所以需要地图这个参数(.map--就是在地图中显示这个食物的意思)
				Food.prototype.init = function(map) {
					// 先删除这个小食物
					remove();

					// 创建食物
					var div = document.createElement("div");
					// 把div加入到map中
					map.appendChild(div);
					div.style.width = this.width + "px";
					div.style.height = this.height + "px";
					div.style.backgroundColor = this.color;
					//div的横纵坐标需要随机产生
					// 先让div脱离文档流
					div.style.position = "absolute";
					// 随机横纵坐标
					this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
					this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
					div.style.left = this.x + "px";
					div.style.top = this.y + "px";

					// 把div加入到elements数组中
					elements.push(div);
				};

				//私有的函数,删除食物用的
				function remove() {
					// element数组中有这个食物
					elements.forEach(function(ele, i) {
						var ele = elements[i];
						// 找到这个子元素的父级元素,然后删除这个子元素
						ele.parentNode.removeChild(ele);
						// 把数组中的子元素也要删除
						elements.splice(i, 1);
					})
				}


				window.Food = Food;

			}());
