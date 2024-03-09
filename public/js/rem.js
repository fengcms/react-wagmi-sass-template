!(function () {
  function isMobile() {
    var isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) != null
    return isPhone
  }

  function htmlFontSize() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var width = w > 900 ? 900 : w
    var fz = ~~(width * 100000 / 37.5) / 10000
    var html = document.querySelector('html')
    html.style.cssText = 'font-size: ' + fz + 'px'
    var realfz = ~~(+window.getComputedStyle(html).fontSize.replace('px', '') * 10000) / 10000
    if (fz !== realfz) {
      html.style.cssText = 'font-size: ' + fz * (fz / realfz) + 'px'
    }
  }

  if (isMobile()) {
    document.querySelector('html').classList.add('mobile-mode')
    window.addEventListener(
      'resize',
      (function () {
        htmlFontSize()
        return arguments.callee
      })(),
      false
    )
  }
})()
