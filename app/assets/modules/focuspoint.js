	
/**
 * jQuery FocusPoint; version: 1.1.3
 * Author: http://jonathonmenz.com
 * Source: https://github.com/jonom/jquery-focuspoint
 * Copyright (c) 14 J. Menz; MIT License
 * @preserve
 */
!function ($) { var t = { reCalcOnWindowResize: !0, throttleDuration: 17 }, n = function (t) { var n = t.find("img").attr("src"); t.data("imageSrc", n), i(n, function (n, i) { t.data({ imageW: i.width, imageH: i.height }), r(t) }) }, i = function (t, n) { $("<img />").one("load", function () { n(null, { width: this.width, height: this.height }) }).attr("src", t) }, a = function (t, n) { var i = !1; return function () { var a = Array.prototype.slice.call(arguments, 0); if (i) return !1; i = !0, setTimeout(function () { i = !1, t.apply(null, a) }, n) } }, o = function (t, n, i, a, o) { var r = Math.floor(n / 2), e = (a + 1) / 2, u = Math.floor(i / t), f = Math.floor(e * u); o && (f = u - f); var c = f - r, s = u - f, h = n - r; return s < h && (c -= h - s), c < 0 && (c = 0), -100 * c / n + "%" }, r = function (t) { var i = t.data("imageW"), a = t.data("imageH"), r = t.data("imageSrc"); if (!i && !a && !r) return n(t); var e = t.width(), u = t.height(), f = parseFloat(t.data("focusX")), c = parseFloat(t.data("focusY")), s = t.find("img").first(), h = 0, d = 0; if (!(e > 0 && u > 0 && i > 0 && a > 0)) return !1; var l = i / e, w = a / u; s.css({ "max-width": "", "max-height": "" }), i > e && a > u && s.css(l > w ? "max-height" : "max-width", "100%"), l > w ? h = o(w, e, i, f) : l < w && (d = o(l, u, a, c, !0)), s.css({ top: d, left: h }) }, e = $(window), u = function (t, n) { var i = n.throttleDuration ? a(function () { r(t) }, n.throttleDuration) : function () { r(t) }, o = !1; return r(t), { adjustFocus: function () { return r(t) }, windowOn: function () { if (!o) return e.on("resize", i), o = !0 }, windowOff: function () { if (o) return e.off("resize", i), o = !1, !0 } } }; $.fn.focusPoint = function (n) { if ("string" == typeof n) return this.each(function () { $(this).data("focusPoint")[n]() }); var i = $.extend({}, t, n); return this.each(function () { var t = $(this), n = u(t, i); t.data("focusPoint") && t.data("focusPoint").windowOff(), t.data("focusPoint", n), i.reCalcOnWindowResize && n.windowOn() }) }, $.fn.adjustFocus = function () { return this.each(function () { r($(this)) }) } }(jQuery);

$(window).ready( function() {

	// focuspoint helper
	// https://jonom.github.io/jquery-focuspoint/demos/helper/index.html
	var focuspoint = $('.focuspoint');
	var images = {
		'Jelle-Kuiper-1.jpg': { x: -0.15, y: -0.2, width: 1920, height: 1280 },
		'Jelle-Kuiper-2.jpg': { x: -0.15, y: -0.2, width: 1920, height: 1280 },
		'Jelle-Kuiper-3.jpg': { x: -0.15, y: -0.2, width: 1920, height: 1280 },
		'Bedrijfsoptreden-Jelle-Kuiper-fakespeech.jpg': { x: -0.15, y: 0.53, width: 1280, height: 1920 },
		'Bedrijfsoptredens-Jelle-Kuiper-hero.jpg': { x: -0.40, y: 0.47, width: 960, height: 370 },
		'Bedrijfsoptreden-buurmanbuurman-Jelle-Kuiper-2.jpg': { x: -0.72, y: 0.63, width: 1000, height: 675 },
		'Bedrijfsoptreden-buurmanbuurman-Jelle-Kuiper-3.jpg': { x: -0.23, y: -0.30, width: 1305, height: 1920 },
		'Bedrijfsoptreden-Jelle-Kuiper-contact.jpg': { x: 0.15, y: -0.36, width: 1235, height: 1851 },
		'Bedrijfsoptreden-Jelle-Kuiper-presentatie-maxima.jpg': { x: 0.28, y: 0.54, width: 1920, height: 1285 },
		'Bedrijfsoptreden-Jelle-Kuiper-quiz.jpg': { x: 0.35, y: 0.41, width: 1250, height: 832 },
		'Theaterproducties-Jelle-Kuiper-introductie.jpeg': { x: -0.06, y: 0.24, width: 1098, height: 960 },
		'Theaterproducties-judas-Jelle-Kuiper.jpg': { x: 0.49, y: -0.49, width: 866, height: 455 },
		'Theaterproducties-JelleKuiper-StefanoKeizers.jpg': { x: -0.00, y: 0.43, width: 1920, height: 1280 },
		'Theaterproducties-andrehetastronautje-Jelle-Kuiper.jpg': { x: -0.02, y: -0.39, width: 1920, height: 1366 },
		'Theaterproducties-dezuipkeet-Jelle-Kuiper.jpg': { x: 0.51, y: -0.21, width: 1920, height: 1278 },
		'Trouwambtenaar-Jelle-Kuiper-hero.jpg': { x: -0.33, y: 0.52, width: 1920, height: 1280 },
		'Trouwambtenaar-Jelle-Kuiper-ceremonieel-huwelijk.jpg': { x: -0.15, y: -0.02, width: 900, height: 601 },
		'Trouwambtenaar-Jelle-Kuiper-kosten.jpg': { x: -0.15, y: 0.55, width: 900, height: 601 },
		'Trouwambtenaar-Jelle-Kuiper-knuffel-contact.jpg': { x: 0.07, y: 0.68, width: 720, height: 1080 },
		'Trouwambtenaar-Jelle-Kuiper-leuktrouwen-prijs.jpg': { x: -0.31, y: 0.49, width: 960, height: 370 },
		'Trouwambtenaar-Jelle-Kuiper-leuk-trouwen.jpg': { x: 0.07, y: 0.47, width: 1438, height: 960 },
		'Trouwambtenaar-Jelle-Kuiper-Persoonlijk.jpg': { x: 0.25, y: 0.48, width: 640, height: 427 },
	}

	function imageLoaded() {

		$.each(focuspoint, function () {
			var that = $(this),
					src = that.find('img').attr('src');

			Object.keys(images).forEach(function (key) {
				if (src.indexOf(key) !== -1) {

			that.attr('data-image-w', images[key].width)
				.attr('data-image-h', images[key].height)
				.attr('data-focus-x', images[key].x)
				.attr('data-focus-y', images[key].y);
				}
			});

		})
		focuspoint.focusPoint();
	}

	// WTF:: $(window).on('load', function () {
	// werkt niet op mijn telefoon!!!
	$(window).ready(function () {

		$('img').each(function () {

			if (this.complete) {
				imageLoaded.call(this);
			}
			else {
				$(this).one('load', imageLoaded);
			}
		});
	});
});