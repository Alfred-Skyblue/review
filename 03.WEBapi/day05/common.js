
/**
 * 格式化日期
 * @param dt 日期对象
 * @returns {string} 返回值是格式化的字符串日期
 */
function getDates(dt) {
    var str = "";//存储时间的字符串
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var min = dt.getMinutes();
    //获取秒
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
    return str;
}



/**
 * 根据id属性值，返回对应的元素
 * 参数是id属性值
 * @param {Object} id
 */
function my$(id) {
	return document.getElementById(id);
}


/**
 * 获取指定id值下面的所有指定子元素
 * 返回值是存储所有指定子元素的数组
 * @param {Object} label
 */
function me$(id, sun) {
	return document.getElementById(id).getElementsByTagName(sun);
}

/**
 * 设置任意标签内的任意文本内容
 * element=标签名
 * text=文本内容
 * @param {Object} element 标签名
 * @param {Object} text	文本内容
 */
function setInnerText(element, text) {

	//判断浏览器是否支持这个属性
	if (typeof element.innerText == "undefined") { //不支持这个属性
		element.innerContent = text;
	} else { //支持这个属性
		element.innerText = text;
	}
}


/**
 * 获取任意标签的文本内容
 * @param {Object} element 标签名
 */
function getInnerText(element) {
	if (typeof element.textContent == "undefined") {
		return element.innerText;
	} else {
		return element.textContent;
	}
}


/**
 * 获取任意一个父级元素的第一个子级元素
 * @param {Object} element
 */
function getFirstElementChild(element) {
	if (element.firstElementChild) { //如果为true则支持
		return element.firstElementChild;
	} else {
		var node = element.firstChild; //为了兼容其他浏览器，所以这里需要获取元素的第一个子节点
		while (node && node.nodeType != 1) { //判断这个节点是不是标签，如果不是标签，则寻找下一个节点
			node = node.nextSibling;
		}
		return node;
	}
}

/**
 * 获取任意一个父级元素的最后一个子级元素
 * @param {Object} element
 */

function getLastElementChild(element) {
	if (element.lastElementChild) { //如果为true则支持
		return element.lastElementChild;
	} else {
		var node = element.lastChild; //为了兼容其他浏览器，这里需要获取最后一个子节点
		while (node && node.nodeType != 1) { //判断这个节点是不是标签，如果不是标签，则寻找上一个节点
			node = node.previousSibling;
		}
		return node;
	}
}


/**
 * 为元素绑定多个事件的兼容性代码
 * 参数是：元素,事件类型,函数表达式
 * @param {Object} element
 * @param {Object} type
 * @param {Object} fn
 */
function addEventListener(element, type, fn) {
	if (element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}

/**
 * 为元素解绑任意事件的兼容性代码
 * 参数是：元素,事件类型,函数表达式
 * @param {Object} element
 * @param {Object} type
 * @param {Object} fn
 */
function removeEventListener(element, type, fn) {
				if (element.removeEventListener) {
					element.removeEventListener(type, fn, false);
				} else if (element.detachEvent) {
					element.detachEvent("on" + type, fn);
				} else {
					element["on" + type] = null;
				}
			};
			
			
			
/**
 * 缓动动画封装代码
 * 将元素移动到指定位置
 * 参数:元素、位置、回调函数
 * @param {Object} element
 * @param {Object} target
 * @param {Object} callback
 */			
			
function bufferAnimation(element, target,callback) {
				// 先清除一次定时器
				clearInterval(element.timer);
				// 注册定时器事件
				element.timer = setInterval(function() {
					
					//获取元素当前的位置
					var current = element.offsetLeft
					
					// 步长值计算公式
					var step = (target - current) / 10;
					
					//判断需要移动的距离是不是负值，如果是负值，需要向下取整，如果是正向移动，则向上取整
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
					
					// 将元素移动到指定的位置
					element.style.left = current + step + 'px';
					
					//如果当前位置等于目标位置，则停止定时器
					if (current == target) {
						// 停止定时器
						clearInterval(element.timer);
						
						//判断有没有传入回调函数，如果有，则执行回调函数
						if (callback) {
							callback();
						}
					}
					

				}, 20);
			}