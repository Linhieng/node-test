## 文档

[pug 官方文档](https://www.pugjs.cn/)

## 基本使用

将 pug.pug 源文件进行编译  
编译完成后直接格式化即可

```js
import pug from 'pug'
import fs from 'fs'

// 编译这份代码
const compiledFunction = pug.compileFile('./index.pug');

fs.writeFileSync('./pug.html', compiledFunction())

```

