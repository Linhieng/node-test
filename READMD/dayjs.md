## 文档

[文档](https://dayjs.fenxianglu.cn/)

## 基本使用

```js
import dayjs from 'dayjs'
// dayjs() 等同于 dayjs(Date.now())
console.log(dayjs().format('MM-DD'))
console.log(dayjs().format('YYYY-MM-DD HH:mm'))
console.log(dayjs(123456).format('YYYY-MM-DD HH:mm'))
```