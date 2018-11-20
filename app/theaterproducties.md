---
title: Theaterproducties
menu: Theaterproducties
keywords: Creatief, Aangrijpend, Radicaal.
order: 1
teaserText: Vele bedrijven en instellingen hebben Jelle ingehuurd voor een presentatie, dagvoorzitterschap of een op maat gemaakte optreden tijdens een congres of zakelijke bijeenkomst. Altijd met  groot succes. Jelle zorgt er altijd voor dat zijn optreden naadloos aansluit op het thema van het congres of de bedrijfsbijeenkomst.
summary: 'In 2010 ging Jelle Kuiper zijn eerste theatervoorstelling in premiere: Buurman & Buurman gaan verhuizen. Inmiddels staat de 4e voorstelling van Buurman & Buurman in het theater en zijn er meer dan 650 shows gespeeld. Ook is Jelle (mede) producent van Judas, naar de bestseller van Astrid Holleeder en is hij de regisseur van Stefano Keizers.'
headerimage: /assets/img/theaterproducties/Theaterproducties-JelleKuiper-StefanoKeizers.jpg
---

<!-- block usp -->
<section class="block usps">
	<article class="usp">
		<picture class="focuspoint picture fade-in">
			<img class="img" src="/assets/img/theaterproducties/Theaterproducties-Jelle-Kuiper-introductie.jpeg" alt="Jelle Kuiper">
		</picture>
		<div class="article">
			<strong class="subtitle">Producties​​</strong>
			<p class="paragraph">In 2010 ging zijn eerste voorstelling Buurman en Buurman gaan verhuizen in premiere. Inmiddels is alweer de 4e Buurman en Buurman theatervoorstelling te zien. Daarnaast maakte Jelle het indringende familiedrama 'De Zuipkeet' en samen met André Kuipers de familievoorstelling 'André het astronautje'.</p>
		</div>
	</article>
</section>

{% include block/block.video.html src="https://player.vimeo.com/video/236546630?title=0&byline=0&portrait=0&transparent=0&autoplay=0&color=fff" %}

<!-- block usp -->
<section class="block usps">
  {% assign theaterproducties = site.theaterproducties | sort: 'order' %}
	{% for theaterproductie in theaterproducties %}
	<article class="usp">
		<picture class="focuspoint picture">
			<img class="img" src="{{theaterproductie.headerimage}}" alt="{{theaterproductie.title}}">
		</picture>
		<div class="article">
			<strong class="subtitle">{{theaterproductie.title}}</strong>
			<p class="paragraph">{{theaterproductie.teasertext}}</p>
			<a href="{{theaterproductie.url}}" class="button">Lees meer</a>
		</div>
	</article>
	{% endfor %}
</section>

{% include block/block.counter.html firstTimer="12" firstTitle="Theaterproducties" secondTimer="9" secondTitle="Jaar ervaring" %}
{% include block/block.contactform.html subject="Bv. Theaterproducent"  image="bedrijfsoptredens/Bedrijfsoptreden-Jelle-Kuiper-fakespeech.jpg" message="Bv. Hoi Jelle,  ik heb een producent nodig voor een theatervoorstelling die ik op aan het zetten ben. Wil je een keertje koffie drinken? Groetjes, Charlotte" %}
{% include entities/page/page.teaser.html teasers="trouwambtenaar, bedrijfsoptredens"%}
