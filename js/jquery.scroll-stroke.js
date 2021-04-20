/*
  jQuery plugin for drawing a svg line as you scroll.

  @author Johan Brook, for Lookback (2014).

  Options:
    startAt: The reference point to start calculating from. Expects a selector.
    speed: at which speed the line should draw.
    offset: the offset of which the reference point should be.

*/
$.fn.scrollStroke = function(options) {
  var defaults = {
    startAt: document,
    speed: 400,
    offset: 0
  }

  options = $.extend({}, defaults, options)

  var hideLine = function(line) {
    line.style.strokeDasharray = [ 0, line.getTotalLength()].join(' ')
  }

  var drawLine = function(line, reference, speed) {
    var pathLength = line.getTotalLength(),
        percentDone = reference / speed,
        length = percentDone * pathLength

    if(percentDone > 1) return

    line.style.strokeDasharray = [ length, pathLength ].join(' ')
  }

  return this.each(function() {
    var line = this
    $(window).on('scroll', function() {
      var startAt = $(options.startAt).offset().top,
          reference = $(window).scrollTop() - startAt + options.offset

      // Hide line completely
      if(reference < 0) {
        hideLine(line)
        return
      }

      drawLine(line, reference, options.speed)
    })
  })
}
