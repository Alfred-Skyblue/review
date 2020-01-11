/**
 * 食物的自调用函数
 * 
 */
		(function() {
				var elements = [];
				//食物就是一个对象,有宽,有高,有背景颜色,有横纵坐标,先定义构造函数,然后创建对象
				function Food(x, y, width, height, color) {
					// 横纵坐标
					this.x = x || 0;
					this.y = y || 0;
					// 宽和高
					this.width = width || 20;
					this.height = height || 20;
					// 背景颜色
					this.color = color || "green";
				}

				// 为原型添加初始化方法，初始化食物
				Food.prototype.init = function(map) {
					//每次调用方法,先删除一次小食物
					remove();


					// 因为食物要在地图上面显示,所以需要map这个参数
					// 创建div
					var div = document.createElement("div");
					// 设置div的样式
					div.style.width = this.width + "px";
					div.style.height = this.height + "px";
					div.style.backgroundColor = this.color;
					// 脱标
					div.style.position = "absolute";
					this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
					this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
					// 设置div的横纵坐标
					div.style.left = this.x + "px";
					div.style.top = this.y + "px";
					// 把div加入到地图中
					map.appendChild(div);

					//把div加入到elements数组当中去

					elements.push(div);
				};

				//私有的函数,用来删除食物
				function remove() {
					for (var i = 0; i < elements.length; i++) {
						var ele = elements[i];
						// 找到这个子元素的父级元素,然后删除这个子元素
						ele.parentNode.removeChild(ele);
						// 再次把elements里面的div也删除掉
						// elements.slice(i,1);
						elements = [];
					}
				}



				window.Food = Food;
			}());
