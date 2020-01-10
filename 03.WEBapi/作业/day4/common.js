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
function me$(id,sun) {
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
	if (element.firstElementChild) {//如果为true则支持
		return element.firstElementChild;
	} else{
		var node=element.firstChild;//为了兼容其他浏览器，所以这里需要获取元素的第一个子节点
		while (node&&node.nodeType!=1){//判断这个节点是不是标签，如果不是标签，则寻找下一个节点
			node=node.nextSibling;
		}
		return node;
	}
}

/**
 * 获取任意一个父级元素的最后一个子级元素
 * @param {Object} element
 */

function getLastElementChild(element) {
	if (element.lastElementChild) {//如果为true则支持
		return element.lastElementChild;
	} else{
		var node=element.lastChild;//为了兼容其他浏览器，这里需要获取最后一个子节点
		while (node&&node.nodeType!=1){//判断这个节点是不是标签，如果不是标签，则寻找上一个节点
			node=node.previousSibling;
		}
		return node;
	}
}