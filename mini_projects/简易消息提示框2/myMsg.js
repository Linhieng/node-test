// 高阶函数, 让 fn 函数只执行一次
function once (fn) {
  return function (...args) {
    if (fn) {
      const result = fn.apply(this, args)
      fn = null
      return result
    }
  }
}

const $msg = (function myMsg(msgInbox) {
  // TODO: 暂时没想到要用来干什么
  msgInbox = msgInbox || new Map()

  // 创建一个顶层元素, 原来放置消息框
  const myMsgElement = document.createElement('div')
  myMsgElement.id = 'my-msg'
  document.body.appendChild(myMsgElement)

  // 先放这里吧, 这些是类型名
  const types = ['center', 'success', 'error', 'warning']

  return (message, type) => {
    // 首先需要对参数进行合法性校验
    if (message === undefined) return
    if (types.indexOf(type) === -1) type = undefined

    // 创建一个消息框元素，并插入到上面创建的顶层元素中
    const msg = document.createElement('div')
    msg.innerHTML = `<p>${message}</p>`
    msg.classList.add('message')
    type && msg.classList.add(type)
    myMsgElement.appendChild(msg)

    //
    setTimeout(() => {
      msg.classList.add('fadeOut')
      msg.addEventListener('animationend', () => {
        // 因为样式中设置了两个动画, 而且时间相同, 不做限制的话, 下面的函数会执行两次
        once(() => myMsgElement.removeChild(msg))
      })
    }, 2500)
  }
})()
