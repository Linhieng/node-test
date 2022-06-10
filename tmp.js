let options = { //配置observer实例的对象
  // root: document.querySelector('#parentBox'), // 指定根元素，必须是目标元素的父级元素; 默认：文档视口
  // rootMargin: "0px 0px 0px 0px", //根元素的外边距。类似于 CSS 中的 margin 属性。默认值是"0px 0px 0px 0px",分别表示 top、right、bottom 和 left 四个方向的值，用来扩展或缩小rootBounds这个矩形的大小，从而影响intersectionRect交叉区域的大小。
  threshold: [0] //目标元素和根元素相交部分的比例达到该值的时候，callback 函数将会被执行，eg: 1 、[0.5 , 1],当为数组时每达到该值都会执行 callback 函数。默认值为[0]。
}
let observer = new IntersectionObserver(callback, options);

let callback = (entries, observer) => {
  entries.forEach(entry => {
    consloe.log(entry) //包含目标元素的信息的对象
    // entry.time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
    // entry.target：被观察的目标元素，是一个 DOM 节点对象
    // entry.rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
    // entry.boundingClientRect：目标元素的矩形区域的信息
    // entry.intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
    // entry.intersectionRatio：根和目标元素的交叉区域的比例值，即intersectionRect占boundingClientRect的比例，0 为完全不可见，1 为完全可见
    // entry.isIntersecting：true表示从不可视状态变为可视状态。false表示从可视状态到不可视状态：false
  });

  const targetNode1 = document.getElementById('targetNode1')
  const targetNode2 = document.getElementById('targetNode2')
  //observe的参数是一个 DOM 节点对象。如果要观察多个节点，就要多次调用这个方法。
  observer.observe(targetNode1);
  observer.observe(targetNode2); //开始观察目标元素。
  // observer.disconnect(); //关闭观察器。
  // observer.takeRecords(); //返回所有观察目标对象数组。
  // observer.unobserve(targetNode1); //停止观察特定目标元素。
};
