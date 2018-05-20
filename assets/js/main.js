---
---
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip()
  new ClipboardJS(':not([data-clipboard-text=""])');
  // $.scrollify({
  //   section: '.snap-point',
  //   offset: -{{ site.navbar-height }},
  //   setHeights: false
  // })
})
