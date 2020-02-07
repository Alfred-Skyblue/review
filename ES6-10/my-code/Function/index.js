// 函数参数的默认值
function fn(x, y, z) {
  y = y || 5
  z = z || 6
  return x + y + z
}

let num = fn(3)




$('#b').click(function () {
  if ($(this).val() == 0) return $('#bbb').css(display, 'block')
  return $('#bbb').css(display, 'none')
})