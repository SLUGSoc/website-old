$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip()
  new ClipboardJS(':not([data-clipboard-text=""])')

  var elements = $('.sticky-top')
  elements
    .stick_in_parent()
  //   .on('sticky_kit:stick', function(e) {
  //     console.log('has stuck!', e.target)
  //     $(e.target)
  //       .find('.navbar-brand')
  //       .children()
  //       .addClass('compact')
  //   })
  //   .on('sticky_kit:unstick', function(e) {
  //     console.log('has unstuck!', e.target)
  //     $(e.target)
  //       .find('.navbar-brand')
  //       .children()
  //       .removeClass('compact')
  //   })

   window.onscroll = function() {myFunction()};

  function myFunction() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          $(".sticky-top")
            .find('.navbar-brand')
            .find('span')
            .children()
            .addClass('brand-compact')
      } else {
          $(".sticky-top")
            .find('.navbar-brand')
            .find('span')
            .children()
            .removeClass('brand-compact')
      }
  }

  cheet('↑ ↑ ↓ ↓ ← → ← → b a', function() {
    $('main').append(
      '<h1 class="d-fixed fixed-bottom text-light text-stroke-black w-100 text-center mt-3 font-impact"> BOTTOM TEXT</h1>'
    )
    $('main').append(
      '<h1 class="d-fixed fixed-top text-light text-stroke-black w-100 text-center font-impact"> WE LIVE IN A SOCIETY</h1>'
    )
    cheet.disable('↑ ↑ ↓ ↓ ← → ← → b a')
  })
})
