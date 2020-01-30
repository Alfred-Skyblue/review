function fn() {
  console.log('我是b里面的fn');
}

const name = 'b';
const obj = {
  name: 'lisi'
}
export {
  fn,
  name,
  obj
}