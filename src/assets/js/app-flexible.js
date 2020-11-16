'use strict'
/** 配合移动端页面px转remflexible方案es6版 */
;(function flexible(window, document) {
  /** 当前浏览器document */
  const docEl = document.documentElement
  /** 当前设备的dpr像素比 */
  const dpr = window.devicePixelRatio || 1

  /**
   * 设置body的fontSize= 12 * dpr
   */
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  /**
   * 根据屏幕宽度 1rem的比例基准
   * set 1rem = viewWidth / 10
   */
  function setRemUnit() {
    const rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // 监听屏幕切换resize事件,重置rem比例
  window.addEventListener('resize', function() {
    setTimeout(function() {
      setRemUnit()
    }, 300)
  })
  // pageshow 事件类似于 onload 事件,用户浏览网页时触发。
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // 当dpr>=2时,解决移动端Retina屏幕1px边框, 对 0.5px 的设置
  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
