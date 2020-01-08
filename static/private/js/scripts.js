/* ==========================================================================
    Query String handler
    ========================================================================== */
var queryString = {}
try {
  let query = window.location.search.split('?')[1]
  let vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    let key = decodeURIComponent(pair[0])
    let value = decodeURIComponent(pair[1])
    // If first entry with this name
    if (typeof queryString[key] === 'undefined') {
      queryString[key] = decodeURIComponent(value)
      // If second entry with this name
    } else if (typeof queryString[key] === 'string') {
      let arr = [queryString[key], decodeURIComponent(value)]
      queryString[key] = arr
      // If third or later entry with this name
    } else {
      queryString[key].push(decodeURIComponent(value))
    }
  }
} catch (error) { /* No Parameters */ }

window.location.queryString = queryString

/* ==========================================================================
    Browser detector
    ========================================================================== */

navigator.browser = {}
navigator.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase())
navigator.browser.msie = /msie/.test(navigator.userAgent.toLowerCase())
navigator.browser.mozilla = /firefox/.test(navigator.userAgent.toLowerCase())
navigator.browser.ipad = /ipad/.test(navigator.userAgent.toLowerCase())
navigator.browser.iphone = /iphone/.test(navigator.userAgent.toLowerCase())
navigator.browser.android = /android/.test(navigator.userAgent.toLowerCase())
