function debounce(fn, delay = 500) {
  let timer = null
  let debounced = function () {
    let that = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(that, arguments)
      timer = null
    }, delay)
  }

  return debounced
}

// function debounce(func, wait = 500, immediate) {
//   let time
//   let debounced = function () {
//     let context = this
//     if (time) clearTimeout(time)

//     if (immediate) {
//       let callNow = !time
//       if (callNow) func.apply(context, arguments)
//       time = setTimeout(
//         () => {
//           time = null
//         } //见注解
//         , wait)
//     } else {
//       time = setTimeout(
//         () => {
//           func.apply(context, arguments)
//         }, wait)
//     }
//   }
//   return debounced
// }

const dvObj = document.querySelector('#dv1')

dvObj.addEventListener('mousemove', debounce(function (e) {
  console.log(e.offsetX, e.offsetY);

}, 2000))
// text.onkeyup = debounce(function () {
//   console.log(this);
//   // console.log(this.value);
// }, 500, false)