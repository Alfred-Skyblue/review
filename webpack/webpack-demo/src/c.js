function fn() {
  console.log('我是c里面的fn');
}

const name = 'c';
const obj = {
  name: 'wangwu'
}
export default {
  fn,
  name,
  obj
}