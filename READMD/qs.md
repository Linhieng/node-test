## 文档

[文档](https://www.npmjs.com/package/qs)

## 基本使用

```js
import qs from 'qs'

// 不支持前面带有域名
console.log(qs.parse('key=value&key2=value2')) // { key: 'value', key2: 'value2' }
console.log(qs.stringify({key:'value',key2:'value2'})) // key=value&key2=value2
```