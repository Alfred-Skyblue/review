$(function() {

	var liNum = 5 * 5 * 5; //设li的个数为125个
	var nowX;
	var lastX;
	var minusX = 0;
	var roY = 0;
	var nowY;
	var lastY;
	var minusY = 0;
	var roX = 0;
	var tZ = -2000;
	//循环遍历创建li标签,并且把li标签添加到ul中
	init();

	function init() {
		for (var i = 0; i < liNum; i++) {
			// 创建一个jQuery对象
			var list = $("<li></li>");
			var x = (Math.random() - 0.5) * 5000;
			var y = (Math.random() - 0.5) * 5000;
			var z = (Math.random() - 0.5) * 5000;
			list.css({
				"transform": "translate3d(" + x + "px," + y + "px," + z + "px)"
			});
			// 加入到ul中
			$("#main").append(list);
		}
		var timer = setTimeout(function() {
			Grid();
		}, 300);

		// 按钮们的点击事件
		$("#styleBtn li").on("click", function() {
			var index = $(this).index();
			switch (index) {
				case 0:
					break;
				case 1:
					Sphere();
					break;
				case 2:
					Helix();
					break;
				case 3:
					Grid();
					break;
			}
		})

		$("#styleBtn").css({
			transform: "scale(1)",
			opacity: 1
		})
	}





	//自动归位的函数
	function Grid() {
		var tX = 500; //水平间隔
		var tY = 500; //垂直间隔
		var tZ = 800; //Z轴间隔
		var firstX = -2 * tX; //第一个li的水平间隔
		var firstY = -2 * tY; //第一个li的垂直间隔
		var firstZ = -2 * tZ; //第一个li的z轴间隔

		var list = $("#main li");
		list.each(function(i) {
			var iX = (i % 25) % 5; // x方向，要增加的倍数
			var iY = parseInt((i % 25) / 5); //y方向，要增加的倍数
			var iZ = parseInt(i / 25); //z方向，要增加的倍数
			$(this).css({
				"transform": "translate3d(" + (firstX + iX * tX) + "px," + (firstY + iY * tY) + "px," + (firstZ + iZ * tZ) +
					"px)",
			});

		});

	}


	function Helix() {
		var roY = 10;
		var tY1 = 10;
		var mIndex = Math.floor($('#main li').length / 2);
		var ftY = -tY1 * mIndex;
		$("#main li").each(function(i) {
			$(this).css({
				"transform": "rotateY(" + 10 * i + "deg) translateY(" + (ftY + tY1 * i) + "px) translateZ(1000px)",
			});
		});
	}

	function Sphere() {
		var tZ = 800;
		var fisrtRoX = 0;
		var fisrtRoY = 0;
		// var roX = 20;
		// var roY = 20;
		var roX = 360 / 17,
			roY = 360 / (liNum / 18);
		$("#main li").each(function(i) {
			var iY = Math.floor(i / 18);
			$(this).html('fly');
			var x = (fisrtRoX + roX * i) % 360;
			var z = 0;
			if (x > 90 && x < 270) {
				z = 180;
			}
			$(this).css({
				'transform': 'rotateY(' + ((fisrtRoY + iY * roY) % 360) + 'deg) rotateX(' + x + 'deg) rotateZ(' + z +
					'deg) translateZ(' + tZ + 'px)'
			});
		});

		// var len = 5;
		// var arr = [];
		// var roX;
		// var c;
		// /*
		// for (var x = 0; x < 10000; x++) {
		// 	var a = x * x + (x - 1) * (x - 1);
		// 	if (a >= 125) {
		// 		len = x;
		// 		break;
		// 	}
		// }
		// */
		// for (var i = 0; i < 1000; i++) {
		// 	if (16 * i + 9 >= 125) {
		// 		c = i;
		// 		break;
		// 	}
		// }
		// for (var i = 0; i < 2 * len; i++) {

		// 	if (i <= len) {
		// 		arr.push(2 * i - 1);
		// 	} else {
		// 		arr.push(2 * (2 * len - i) - 1);
		// 	}
		// }

		// var roX = 360 / arr.length;
		// var firstRoX = 90;
		// $("#main li").each(function(index) {
		// 	var sum = 0;
		// 	var ceng;
		// 	var ge;
		// 	for (var i = 0; i < arr.length; i++) {
		// 		sum += arr[i];
		// 		if (sum >= index + 1) {
		// 			ceng = i;
		// 			ge = arr[i] - (sum - index);
		// 			break;
		// 		}
		// 	}
		// 	var roY = 360 / arr[ceng]
		// 	var y = ge * roY;
		// 	// var x = ceng % 2 ? firstRoX + ceng * roX : firstRoX - ceng * roX;
		// 	var z=180;
		// 	if (x > 90 && x < 270) {
		// 		z = 180;
		// 	}
		// 	$(this).css({
		// 		'transform': 'rotateY(' + y + 'deg) rotateX(' + x + 'deg) rotateZ(0deg) translateZ(800px)'
		// 	});


		// });
	}


	$(document).on("mousedown", function(e) {
		lastX = e.pageX;
		lastY = e.pageY;
		$(this).on("mousemove", function(e) {
			nowX = e.pageX; //存放鼠标的x坐标
			nowY = e.pageY; //存放鼠标的Y坐标
			minusX = nowX - lastX;
			minusY = nowY - lastY;

			roY += minusX * 0.2;
			roX += minusY * 0.2;

			$("#main").css({
				"transform": "translateZ(" + tZ + "px) rotateX(" + roX + "deg) rotateY(" + roY + "deg)"
			});
			lastY = nowY;
			lastX = nowX;
		});
		return false;
	}).mouseup(function() {
		$(this).off("mousemove");
		clearInterval(timeId1);
		var timeId1 = setInterval(function() {
			minusX *= 0.95;
			minusY *= 0.95;
			roY += minusX * 0.2;
			roX -= minusY * 0.2;
			if (Math.abs(minusX) < 0.5) {
				clearInterval(timeId1);
			}
			if (Math.abs(minusY) < 0.5) {
				clearInterval(timeId1);
			}
			$("#main").css({
				"transform": "translateZ(" + tZ + "px) rotateX(" + roX + "deg) rotateY(" + roY + "deg)"
			});

		}, 20)


	}).mousewheel(function(e, d) { //滚轮滚动事件
		clearInterval(timeId2);
		tZ += d * 50;
		tZ = Math.min(0, tZ);
		tZ = Math.max(-8000, tZ);
		$("#main").css({
			"transform": "translateZ(" + tZ + "px) rotateX(" + roX + "deg) rotateY(" + roY + "deg)"
		});

		var timeId2 = setInterval(function() {
			d *= 0.85;
			if (Math.abs(d) < 0.01) {
				clearInterval(timeId2);
			}
			tZ += d * 80;
			tZ = Math.min(0, tZ);
			tZ = Math.max(-8000, tZ);
			$("#main").css({
				"transform": "translateZ(" + tZ + "px) rotateX(" + roX + "deg) rotateY(" + roY + "deg)"
			});

		}, 30);

	});

});
