/**
 * jQuery FocusPoint; version: 1.1.3
 * Author: http://jonathonmenz.com
 * Source: https://github.com/jonom/jquery-focuspoint
 * Copyright (c) 14 J. Menz; MIT License
 * @preserve
 */
!function ($) { var t = { reCalcOnWindowResize: !0, throttleDuration: 17 }, n = function (t) { var n = t.find("img").attr("src"); t.data("imageSrc", n), i(n, function (n, i) { t.data({ imageW: i.width, imageH: i.height }), r(t) }) }, i = function (t, n) { $("<img />").one("load", function () { n(null, { width: this.width, height: this.height }) }).attr("src", t) }, a = function (t, n) { var i = !1; return function () { var a = Array.prototype.slice.call(arguments, 0); if (i) return !1; i = !0, setTimeout(function () { i = !1, t.apply(null, a) }, n) } }, o = function (t, n, i, a, o) { var r = Math.floor(n / 2), e = (a + 1) / 2, u = Math.floor(i / t), f = Math.floor(e * u); o && (f = u - f); var c = f - r, s = u - f, h = n - r; return s < h && (c -= h - s), c < 0 && (c = 0), -100 * c / n + "%" }, r = function (t) { var i = t.data("imageW"), a = t.data("imageH"), r = t.data("imageSrc"); if (!i && !a && !r) return n(t); var e = t.width(), u = t.height(), f = parseFloat(t.data("focusX")), c = parseFloat(t.data("focusY")), s = t.find("img").first(), h = 0, d = 0; if (!(e > 0 && u > 0 && i > 0 && a > 0)) return !1; var l = i / e, w = a / u; s.css({ "max-width": "", "max-height": "" }), i > e && a > u && s.css(l > w ? "max-height" : "max-width", "100%"), l > w ? h = o(w, e, i, f) : l < w && (d = o(l, u, a, c, !0)), s.css({ top: d, left: h }) }, e = $(window), u = function (t, n) { var i = n.throttleDuration ? a(function () { r(t) }, n.throttleDuration) : function () { r(t) }, o = !1; return r(t), { adjustFocus: function () { return r(t) }, windowOn: function () { if (!o) return e.on("resize", i), o = !0 }, windowOff: function () { if (o) return e.off("resize", i), o = !1, !0 } } }; $.fn.focusPoint = function (n) { if ("string" == typeof n) return this.each(function () { $(this).data("focusPoint")[n]() }); var i = $.extend({}, t, n); return this.each(function () { var t = $(this), n = u(t, i); t.data("focusPoint") && t.data("focusPoint").windowOff(), t.data("focusPoint", n), i.reCalcOnWindowResize && n.windowOn() }) }, $.fn.adjustFocus = function () { return this.each(function () { r($(this)) }) } }(jQuery);

// focuspoint helper
// https://jonom.github.io/jquery-focuspoint/demos/helper/index.html
var focuspoint = $('.focuspoint');
var images = {
	'Bedrijfsoptreden-Jelle-Kuiper-fakespeech.jpg': { x: -0.15, y: 0.53 },
	'Bedrijfsoptredens-Jelle-Kuiper-hero.jpg': { x: -0.40, y: 0.47 },
	'Bedrijfsoptreden-buurmanbuurman-Jelle-Kuiper-2.jpg': { x: -0.72, y: 0.63 },
	'Bedrijfsoptreden-buurmanbuurman-Jelle-Kuiper-3.jpg': { x: -0.23, y: -0.30 },
	'Bedrijfsoptreden-Jelle-Kuiper-contact.jpg': { x: 0.15, y: -0.36 },
	'Bedrijfsoptreden-Jelle-Kuiper-presentatie-maxima.jpg': { x: 0.28, y: 0.54 },
	'Bedrijfsoptreden-Jelle-Kuiper-quiz.jpg': { x: 0.35, y: 0.41 },
	'Theaterproducties-Jelle-Kuiper-introductie.jpeg': { x: -0.06, y: 0.24 },
	'Theaterproducties-judas-Jelle-Kuiper.jpg': { x: 0.49, y: -0.49 },
	'Theaterproducties-JelleKuiper-StefanoKeizers.jpg': { x: 0.25, y: 0.41 },
	'Trouwambtenaar-Jelle-Kuiper-hero.jpg': { x: -0.33, y: 0.52 },
	'Trouwambtenaar-Jelle-Kuiper-ceremonieel-huwelijk.jpg': { x: -0.15, y: -0.02 },
	'Trouwambtenaar-Jelle-Kuiper-kosten.jpg': { x: -0.15, y: 0.55 },
	'Trouwambtenaar-Jelle-Kuiper-knuffel-contact.jpg': { x: 0.07, y: 0.68 },
	'Trouwambtenaar-Jelle-Kuiper-leuktrouwen-prijs.jpg': { x: -0.31, y: 0.49 },
	'Trouwambtenaar-Jelle-Kuiper-leuktrouwen.jpg': { x: 0.07, y: 0.47 },
	'Trouwambtenaar-Jelle-Kuiper-Persoonlijk.jpg': { x: 0.25, y: 0.48 },
	'jellekuiper.jpg': { x: 0.29, y: 0.2 },
}

function imageLoaded() {

  $.each(focuspoint, function () {
    var width = $(this).find('img').width(),
    height = $(this).find('img').height(),
    src = $(this).find('img').attr('src');

		Object.keys(images).forEach(function (key) {
      if (src.indexOf(key) !== -1) {

				that.attr('data-image-w', width)
					.attr('data-image-h', height)
					.attr('data-focus-x', images[key].x)
					.attr('data-focus-y', images[key].y);
			}
		});

	})
	focuspoint.focusPoint();
}

$(window).on('load', function () {
  // $('body').text($('.hero-image img').height() + ' ' + $('.hero-image img').width());
  $('body').text('test 123');
	$('img').each(function () {
    $('body').text('test 1234');

    if (this.complete) {
      imageLoaded.call(this);

    }
    else {
      $(this).one('load', imageLoaded);
		}
	});
});
