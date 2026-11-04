# Matematikos pagrindų kartojimas / Mathematics Refresher

Statinis dvikalbis tinklapis (LT / EN), pritaikytas pirmiausia telefonui. Serverio ir kompiliavimo nereikia.
Sandara, navigacija ir komponentai – tokie pat kaip Taikomosios matematikos tinklapio; skiriasi spalvos (žalia tema) ir turinys.

## Struktūra

```
index.html          nukreipia į lt/index.html
.nojekyll           reikalingas GitHub Pages – turi likti
lt/                 lietuviški puslapiai
  index.html        pradinis puslapis: temų sąrašas
en/                 angliški puslapiai (tie patys failų vardai kaip lt/)
  index.html
assets/
  css/style.css     visas dizainas (spalvos – :root bloke viršuje)
  js/site.js        UI užrašai LT/EN, temų sąrašas, visi interaktyvūs elementai
  katex/            KaTeX 0.16.45 (formulės), MIT licencija
  favicon.svg
```

Visos nuorodos santykinės, todėl tinklapis veikia ir GitHub Pages, ir atidarius `index.html` kompiuteryje.

## Paskelbimas per GitHub Pages

1. Įkelkite visą šio aplanko turinį į saugyklos šaknį.
2. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch** → šaka `main`, aplankas `/ (root)` → **Save**.
3. Po 1–2 min. tinklapis pasiekiamas adresu `https://<naudotojo-vardas>.github.io/<saugyklos-pavadinimas>/`.

Atnaujinimas: **Add file → Upload files** → nutempkite pakeistus failus (tais pačiais vardais, tuose pačiuose aplankuose) → **Commit changes**.

## Dažniausi pakeitimai

**Spalvos.** `assets/css/style.css` viršuje, `:root` bloke (`--accent` – pagrindinė tamsiai žalia). Tamsaus režimo spalvos – bloke `@media (prefers-color-scheme: dark)`.

**Versijos žyma.** Puslapiai stilių ir skriptą įkelia kaip `style.css?v=1` ir `site.js?v=1`. Pakeitus šiuos failus, padidinkite numerį visuose puslapiuose – tada naršyklės iškart įkels naują versiją.

**Aktyvuoti temą.** Faile `assets/js/site.js`, skyriuje „2. TINKLAPIO STRUKTŪRA“: temai `COURSE` sąraše nustatykite `status: 'active'` ir `href: { lt: 'tema-1.html', en: null }`. Puslapį įrašykite į `PAGES` (nurodykite `parent: 'home'`, kad veiktų naršymo kelias ir mygtukas „Atgal“). Temos skyriai (jei jų bus) – `MODELS` sąraše.

**Naujas puslapis.** `<body data-page="...">` reikšmė turi būti raktas iš `PAGES`. Antraštė, kelias, poraštė ir apatinė navigacija sugeneruojamos automatiškai; ranka rašomas tik `<main>` turinys.

**Angliškas puslapis.** Failą tuo pačiu vardu sukurkite `en/` aplanke (`<html lang="en">`) ir įrašykite jo vardą į `PAGES[...].href.en` ir `COURSE[...].href.en` – kalbos perjungiklis ims vesti į jį. Kol angliško puslapio nėra, turinio nuorodos į jį veda į lietuvišką puslapį su prierašu „(in Lithuanian)“.

**Formulės.** Eilutėje `\( ... \)`, atskiroje eilutėje `\[ ... \]`. Dešimtainis kablelis: `5{,}43`. Ilgas formules skaidykite į kelias eilutes (`\begin{aligned} ... \end{aligned}`), kad tilptų telefono ekrane.

## Komponentai

**Sprendimo pavyzdys su žingsniais.**
```html
<article class="card example" id="pavyzdys-1">
  <header class="example-head"><span class="example-tag">1 pavyzdys</span><h3>Pavadinimas</h3></header>
  <div class="problem"><span class="label">Sąlyga</span> ... </div>
  <div class="steps">
    <section class="step"><h4><span class="step-no">1</span><span>Žingsnio pavadinimas</span></h4> ... </section>
    <section class="step step--answer"><div class="answer-box"><span class="label">Atsakymas</span> ... </div></section>
  </div>
</article>
```

**Testo klausimai.**
```html
<div class="quiz">
  <!-- Atviras klausimas; q-solution neprivalomas -->
  <article class="card q" data-type="open">
    <p class="q-text">Sąlyga</p>
    <div class="q-answer"><span class="value">34</span></div>
    <div class="q-solution"> ... </div>
  </article>
  <!-- Su atsakymų variantais; teisingas – data-correct; q-explain neprivalomas -->
  <article class="card q" data-type="mc">
    <p class="q-text">Klausimas</p>
    <ol class="q-options"><li>A</li><li data-correct>B</li><li>C</li></ol>
    <div class="q-explain">Paaiškinimas</div>
  </article>
</div>
```

**Savarankiški uždaviniai.** Tas pats komponentas, tik `<div class="quiz" data-numbering="task">` – rašoma „1 uždavinys“, „2 uždavinys“.

**Sąvokos kortelė.** `<article class="card concept" id="..."><div class="concept-head"><span class="num">1</span><h3>Pavadinimas</h3></div> … </article>`; formulė – `<div class="formula">\[ … \]</div>`; pavyzdys kortelėje – `<div class="example-box"><span class="label">Pavyzdys</span> … </div>`.

**Išskleidžiami blokai.** `<details class="more more--why">` (kodėl taip), `more--mistake` (tipinės klaidos), `more--alt` (kitas būdas), `more--exam` (egzaminui); viduje `<summary>…</summary><div class="more-body">…</div>`.

**Kiti blokai.** Patarimas – `<p class="tip">`; pranešimas – `<div class="notice">`; žymos puslapio viršuje – `<ul class="jump">`; lentelė – `<table class="vtable">` (plati – `<div class="tbl-wrap">` + `vtable compact`).

**Sąvokos apibrėžimas (iššokantis langelis).**
```html
<button type="button" class="term" data-term="Sąvoka" data-def="Trumpas apibrėžimas.">sąvoka</button>
```

**Ženklų schema** (pvz., intervalų metodui; apostrofą rašykite `&#39;`): `<div data-widget="sign-chart" data-spec='{"fp":"f&#39;(x)","f":"f(x)","v":"x","pts":[{"x":"2","z":true}],"s":["-","+"],"outL":false,"outR":false}'></div>`.

**Interaktyvus tiesės brėžinys:** `<div data-widget="line-explorer"></div>` (slankikliai \(m\) ir \(b\)).

`site.js` yra ir kiti Taikomosios matematikos tinklapio grafikai (rinkos, lūžio taško, TP brėžinys ir kt.) – jie nenaudojami, bet palikti, kad abiejų tinklapių skriptai išliktų suderinami.
