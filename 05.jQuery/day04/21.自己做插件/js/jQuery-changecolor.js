$(function () {
      //点击按钮.改变每个div的背景颜色

     
	  
	  //如果希望jQuery的对象能够调用这个方法,那么就把这个方法加入到$.fn.这个位置
	  
	  //插件的基本的代码
      $.fn.changeColor=function (color) {
        //$(this)---->调用该方法的实例对象
        $(this).css("backgroundColor",color);
      };

      $("#dv input").click(function () {
        $("#dv2 div").css("backgroundColor",$(this).val());
      });

		
		
		  //实现功能的代码
		  $("#dv input").click(function () {
		    $("#dv2 div").changeColor($(this).val());
		  });
		
		$("button").click(function () {
			$("#dv2 div").each(function (index,ele) {
				$(ele).css("backgroundColor",randomColor());
			});
			
			//不可以使用
			// for (var i = 0; i < $("#dv2 div").length; i++) {
			// 	$("#dv2 div")[i].css("backgroundColor",randomColor());
			// }
		});
		//随机颜色函数
		function randomColor(){
		  var str='#';
		　　for(var i=0;i<6;i++){
		　　str+=Math.floor(Math.random()*16).toString(16);
		　　}
		　　return str;
		}
		
    });