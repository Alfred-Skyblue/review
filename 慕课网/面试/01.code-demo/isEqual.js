function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

// 全等判断
const isEqual = function (obj1, obj2) {
  // 比较值类型
  if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2;
  // 判断是否传入同一个引用类型
  if (obj1 === obj2) return true;
  // 深度判断
  // 两个都是对象或者数组，而且不相等
  // 1. 先取出 obj1 和 obj2 的 keys，比较个数
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  // 2. 以 obj1 为基准，和 obj2 以此递归比较
  for (let key in obj1) {
    // 比较当前 key 的 val

    const res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }
  return true;
}

// 测试
const obj1 = {
  a: 100,
  b: 200,
  c: {
    x: 300,
    y: 400
  }
}
const obj2 = {
  a: 100,
  b: 200,
  c: {
    x: 300,
    y: 400
  }
}
var flag = isEqual(obj1, obj2)
console.log(`isEqual=====${flag}`);