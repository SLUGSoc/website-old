---
---
$(document).ready(function() {
  $.scrollify({
    section: '.snap-point',
    offset: -{{ site.navbar-height }},
    setHeights: false
  })
})
