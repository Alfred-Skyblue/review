const dvObj = document.querySelector('#dv1')




function throttle(fn, delay = 2000) {
  let timer = null
  return function () {
    if (timer) return false
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

dvObj.addEventListener('drag', throttle(function (e) {
  console.log(e.offsetX, e.offsetY);

}))