/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2019-12-25 12:31:21
 * @LastEditors  : sueRimn
 * @LastEditTime : 2019-12-26 17:14:12
 */
window.onload = function() {
  // 1. 顶部搜索
  search();
  // 2. 轮播图效果
  banner();
  // 3. 倒计时
  downTime();
};

var search = function() {
  /*1.默认固定顶部透明背景*/
  var searchBox = document.querySelector(".jd_search_box");
  var banner = document.querySelector(".jd_banner");
  var height = banner.offsetHeight;
  /*监听页面滚动事件*/
  window.onscroll = function() {
    /*console.log(document.body.scrollTop);
         console.log(document.documentElement.scrollTop);
         console.log(window.pageYOffset);*/
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    console.log(scrollTop);
    /*默认的透明度*/
    var opacity = 0;
    if (scrollTop < height) {
      /*2.当页面滚动的时候---随着页面卷曲的高度变大透明度变大*/
      opacity = (scrollTop / height) * 0.85;
    } else {
      /*3.当页面滚动的时候---超过某一个高度的时候透明度不变*/
      opacity = 0.85;
    }
    searchBox.style.background = "rgba(201,21,35," + opacity + ")";
  };
};

var banner = function() {
  // 1. 自动无缝轮播 => 定时器、过渡
  // 2. 点要随着图片的轮播改变 => 根据索引切换
  // 3. 轮播图滑动效果 => 利用touch事件完成滑动效果
  // 4. 滑动结束的时候，如果滑动的距离不超过指定距离就恢复原状 => 过渡
  // 5. 滑动结束的时候，如果滑动的距离超过了指定距离，那么就切换上一张或者下一张 => 根据滑动的方向+过渡

  var banner = document.querySelector(".jd_banner");
  // 获取屏幕的宽度
  var width = banner.offsetWidth;
  // 获取图片的容器
  var imageBox = banner.querySelector("ul");
  // 点容器
  var pointBox = banner.querySelectorAll("ul")[1];
  // 获取所有的点
  var points = pointBox.querySelectorAll("li");

  // 添加过渡
  var addTransition = function() {
    imageBox.style.transition = "all 0.2s";
    imageBox.style.webkitTransition = "all 0.2s";
  };

  // 移除过渡
  var removeTransition = function() {
    imageBox.style.transition = "none";
    imageBox.style.webkitTransition = "none";
  };

  // 位移
  var setTranslateX = function(translateX) {
    imageBox.style.transform = "translateX(" + translateX + "px)";
    imageBox.style.webkitTransform = "translateX(" + translateX + "px)";
  };

  // 程序的核心 index
  var index = 1;
  var interval = () => {
    index++;
    // 添加过渡效果
    addTransition();
    // 添加位移效果
    setTranslateX(-index * width);
  };
  var timer = setInterval(interval, 1000);

  // 需要等到最后一张动画结束的时候，判断是否回到第一张
  imageBox.addEventListener("transitionend", function() {
    if (index >= 9) {
      index = 1;
      // 瞬间定位
      // 清除过渡
      removeTransition();

      // 做位移
      setTranslateX();
    } else if (index <= 0) {
      index = 8;
      // 瞬间定位
      // 清除过渡
      removeTransition();

      // 做位移
      setTranslateX();
    }

    // 根据点的索引值移动图片
    // 此时此刻 index 的取值范围 1-8
    // 点的索引 index-1
    setPoint();
  });

  // 设置点的方法
  var setPoint = function() {
    // 清除样式
    [...points].forEach((item, i) => {
      item.classList.remove("now");
    });
    // 对应的小圆点加上样式
    points[index - 1].classList.add("now");
  };

  var startX = 0;
  var distanceX = 0;
  var flag = true;
  // 绑定触摸事件
  imageBox.addEventListener("touchstart", function(e) {
    // TODO:触摸屏幕
    clearInterval(timer);
    // 记录起始位置的X坐标
    startX = e.touches[0].clientX;
  });
  imageBox.addEventListener("touchmove", function(e) {
    // TODO:移动屏幕
    // 记录滑动过程中的x坐标
    var moveX = e.touches[0].clientX;
    // 计算位移 有正负方向
    distanceX = moveX - startX;
    console.log();
    // 计算目标元素的位移  不用管正负
    // 元素的移动位置=当前定位+手指移动的距离
    var translateX = -index * width + distanceX;
    // 滑动 => 元素随着手指的滑动做位置的改变
    removeTransition();
    setTranslateX(translateX);
    flag = false;
  });
  imageBox.addEventListener("touchend", function(e) {
    if (flag) return;

    // TODO:滑动结束
    // 要使用移动的距离
    if (Math.abs(distanceX) < width / 3) {
      // 吸附回原位
      addTransition();
      setTranslateX(-index * width);
    } else {
      // 切换
      if (distanceX > 0) {
        // 右划 => 上一张
        index--;
      } else {
        // 左滑 => 下一张
        index++;
      }
      addTransition();
      setTranslateX(-index * width);
    }
    startX = 0;
    distanceX = 0;
    flag = true;
    clearInterval(timer);
    timer = setInterval(interval, 1000);
  });
};

var downTime = function() {};
