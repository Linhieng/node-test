## 文档

[很简略](http://bilibili.github.io/flv.js/)

## 使用

index.html 文件

```html
<video id="videoElement" mutex></video>
<button id="btn">播放</button>
<script src="index.js" type="module"></script>
```

index.js 文件
需要有用户的交互才会播放
或者静音播放

```js
import './node_modules/flv.js/dist/flv.min.js'

if (flvjs.isSupported()) {
  var videoElement = document.getElementById('videoElement')
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: './resources/test.flv'
  })
  flvPlayer.attachMediaElement(videoElement)
  flvPlayer.load()
  flvPlayer.play()
}
```