/* =====================================================================
   Matematikos pagrindų kartojimas – bendras skriptas visiems puslapiams
   (sukurtas pagal Taikomosios matematikos tinklapio skriptą; komponentai tie patys)

   Turinys:
   1. UI    – visi mygtukų ir navigacijos užrašai (LT ir EN)
   2. KURSAS – kurso struktūra: temos, egzaminai, modeliai, puslapiai
   3. Antraštė, kelias (breadcrumbs), poraštė, kalbos perjungiklis
   4. Pagrindinio puslapio struktūra ir modelių kortelės
   5. Sprendimo pavyzdžiai su žingsniais
   6. Testo klausimai
   7. Sąvokų iššokantys langeliai
   8. Interaktyvus tiesės brėžinys
   9. Formulės (KaTeX)
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. UI UŽRAŠAI
     ------------------------------------------------------------------ */
  var UI = {
    lt: {
      courseShort: 'Matematikos pagrindų kartojimas',
      courseFull: 'Matematikos pagrindų kartojimas',
      credit: 'Parengta su Claude AI pagalba, remiantis matematikos pagrindų kartojimo paskaitų medžiaga',
      home: 'Pradžia',
      skip: 'Pereiti prie turinio',
      langLabel: 'Kalba',
      breadcrumbs: 'Naršymo kelias',
      topicN: function (n) { return n + ' tema'; },
      soon: 'Ruošiama',
      exam: 'Egzaminas',
      midterm: 'Tarpinis egzaminas',
      final: 'Baigiamasis egzaminas',
      open: 'Atidaryti',
      chapterN: function (n) { return n + ' skyrius'; },
      nextChapter: 'Kitas skyrius',
      back: 'Atgal',
      backTo: function (t) { return 'Atgal: ' + t; },
      steps: 'Žingsniai',
      stepOf: function (i, n) { return 'Žingsniai: ' + i + ' iš ' + n; },
      nextStep: 'Kitas žingsnis',
      showAnswerStep: 'Rodyti atsakymą',
      showAll: 'Rodyti visus',
      restart: 'Iš naujo',
      question: function (n) { return n + ' klausimas'; },
      taskN: function (n) { return n + ' uždavinys'; },
      openQ: 'Skaičiavimo klausimas',
      mcQ: 'Pasirinkite atsakymą',
      minutes: function (m) { return '~' + m + ' min.'; },
      timeTitle: 'Rekomenduojamas sprendimo laikas',
      solveFirst: 'Pirmiausia išspręskite patys, tada pasitikrinkite.',
      showAnswer: 'Rodyti atsakymą',
      hideAnswer: 'Slėpti atsakymą',
      showSolution: 'Rodyti sprendimą',
      hideSolution: 'Slėpti sprendimą',
      answer: 'Atsakymas',
      solution: 'Sprendimas',
      explanation: 'Paaiškinimas',
      correct: 'Teisingai!',
      incorrect: 'Neteisingai. Teisingas atsakymas pažymėtas žaliai.',
      tryAgain: 'Bandyti dar kartą',
      draft: 'Juodraštis',
      tryIt: 'Pabandykite patys',
      tryItHint: 'Keiskite m ir b ir stebėkite, kaip keičiasi tiesė.',
      slopeUp: 'm > 0 – tiesė kyla',
      slopeDown: 'm < 0 – tiesė leidžiasi',
      slopeZero: 'm = 0 – tiesė horizontali',
      intercept: function (b) { return 'Tiesė kerta vertikalią ašį taške (0; ' + b + ')'; },
      derivHint: 'Mažinkite Δx ir stebėkite, kaip kirstinė artėja prie liestinės.',
      secant: 'kirstinė',
      tangent: 'liestinė',
      secSlope: 'Kirstinės nuolydis',
      tanSlope: 'Liestinės nuolydis',
      derivZero: 'Kai Δx = 0, taškas B sutampa su A ir kirstinės nėra. Kuo mažesnis Δx, tuo kirstinė arčiau liestinės.',
      derivAria: 'Funkcijos grafikas, kirstinė per taškus A ir B ir liestinė taške A',
      signAria: 'Išvestinės ženklų schema',
      incr: 'didėja', decr: 'mažėja',
      decimal: ',',
      // Grafikų užrašai
      unitEur: 'Eur',
      unitQty: 'vnt.',
      unitYears: 'metai',
      demand: 'Paklausa (D)',
      supply: 'Pasiūla (S)',
      eqPoint: 'Pusiausvyros taškas (E)',
      marketChart: 'Paklausos ir pasiūlos tiesės ir pusiausvyros taškas E',
      revenue: 'Pajamos (R)',
      cost: 'Bendrosios sąnaudos (TC)',
      bePoint: 'Lūžio taškas',
      beLetter: 'L',
      lossZone: 'Nuostolis',
      profitZone: 'Pelnas',
      beChart: 'Pajamų ir bendrųjų sąnaudų tiesės ir lūžio taškas',
      meansChart: 'Gamybos būdų bendrųjų sąnaudų tiesės',
      lowestCost: 'Mažiausios sąnaudos',
      crossPoint: 'Susikirtimo taškas',
      cheapest: 'pigiausias',
      inOther: '(anglų k.)'
    },
    en: {
      courseShort: 'Mathematics Refresher',
      courseFull: 'Mathematics Refresher',
      credit: 'Prepared with the help of Claude AI, based on the Mathematics Refresher lecture materials',
      home: 'Home',
      skip: 'Skip to content',
      langLabel: 'Language',
      breadcrumbs: 'Breadcrumbs',
      topicN: function (n) { return 'Topic ' + n; },
      soon: 'Coming soon',
      exam: 'Exam',
      midterm: 'Midterm exam',
      final: 'Final exam',
      open: 'Open',
      chapterN: function (n) { return 'Section ' + n; },
      nextChapter: 'Next section',
      back: 'Back',
      backTo: function (t) { return 'Back: ' + t; },
      steps: 'Steps',
      stepOf: function (i, n) { return 'Steps: ' + i + ' of ' + n; },
      nextStep: 'Next step',
      showAnswerStep: 'Show answer',
      showAll: 'Show all',
      restart: 'Start over',
      question: function (n) { return 'Question ' + n; },
      taskN: function (n) { return 'Problem ' + n; },
      openQ: 'Calculation question',
      mcQ: 'Choose an answer',
      minutes: function (m) { return '~' + m + ' min'; },
      timeTitle: 'Suggested time',
      solveFirst: 'Solve it yourself first, then check.',
      showAnswer: 'Show answer',
      hideAnswer: 'Hide answer',
      showSolution: 'Show solution',
      hideSolution: 'Hide solution',
      answer: 'Answer',
      solution: 'Solution',
      explanation: 'Explanation',
      correct: 'Correct!',
      incorrect: 'Incorrect. The correct answer is marked in green.',
      tryAgain: 'Try again',
      draft: 'Draft',
      tryIt: 'Try it yourself',
      tryItHint: 'Change m and b and watch how the line changes.',
      slopeUp: 'm > 0 – the line rises',
      slopeDown: 'm < 0 – the line falls',
      slopeZero: 'm = 0 – the line is horizontal',
      intercept: function (b) { return 'The line crosses the vertical axis at (0; ' + b + ')'; },
      derivHint: 'Make Δx smaller and watch the secant line approach the tangent line.',
      secant: 'secant line',
      tangent: 'tangent line',
      secSlope: 'Slope of the secant line',
      tanSlope: 'Slope of the tangent line',
      derivZero: 'When Δx = 0, point B coincides with A and there is no secant line. The smaller Δx is, the closer the secant line is to the tangent line.',
      derivAria: 'Graph of the function, the secant line through points A and B and the tangent line at A',
      signAria: 'Sign chart of the derivative',
      incr: 'increasing', decr: 'decreasing',
      decimal: '.',
      // Chart labels
      unitEur: 'EUR',
      unitQty: 'units',
      unitYears: 'years',
      demand: 'Demand (D)',
      supply: 'Supply (S)',
      eqPoint: 'Equilibrium point (E)',
      marketChart: 'Demand and supply lines and the equilibrium point E',
      revenue: 'Revenue (R)',
      cost: 'Total cost (TC)',
      bePoint: 'Break-even point',
      beLetter: 'B',
      lossZone: 'Loss',
      profitZone: 'Profit',
      beChart: 'Revenue and total cost lines and the break-even point',
      meansChart: 'Total cost lines of the production methods',
      lowestCost: 'Lowest cost',
      crossPoint: 'Intersection point',
      cheapest: 'cheapest',
      inOther: '(in Lithuanian)'
    }
  };

  /* ------------------------------------------------------------------
     2. TINKLAPIO STRUKTŪRA
     COURSE – temų sąrašas pradiniame puslapyje. Norėdami aktyvuoti temą:
     status: 'active' ir href: { lt: 'tema-1.html', en: null }. Angliškas puslapis įrašomas į href.en,
     kai jis sukuriamas. Angliški temų pavadinimai – laikini, tikslinami rengiant anglišką versiją.
     ------------------------------------------------------------------ */
  var COURSE = [
    { id: 't1', num: 1, status: 'active', href: { lt: 'tema-1.html', en: null }, title: { lt: 'Skaičių aibės ir intervalai', en: 'Number Sets and Intervals' } },
    { id: 't2', num: 2, status: 'soon', title: { lt: 'Procentai', en: 'Percentages' } },
    { id: 't3', num: 3, status: 'soon', title: { lt: 'Aritmetinė ir geometrinė progresijos', en: 'Arithmetic and Geometric Progressions' } },
    { id: 't4', num: 4, status: 'soon', title: { lt: 'Reiškinių pertvarkymai', en: 'Transforming Expressions' } },
    { id: 't5', num: 5, status: 'soon', title: { lt: 'Lygtys', en: 'Equations' } },
    { id: 't6', num: 6, status: 'soon', title: { lt: 'Lygčių sistemos', en: 'Systems of Equations' } },
    { id: 't7', num: 7, status: 'soon', title: { lt: 'Nelygybės ir nelygybių sistemos', en: 'Inequalities and Systems of Inequalities' } },
    { id: 't8', num: 8, status: 'soon', title: { lt: 'Logaritmai', en: 'Logarithms' } },
    { id: 't9', num: 9, status: 'soon', title: { lt: 'Logaritminės lygtys ir nelygybės', en: 'Logarithmic Equations and Inequalities' } },
    { id: 't10', num: 10, status: 'soon', title: { lt: 'Rodiklinės lygtys ir nelygybės', en: 'Exponential Equations and Inequalities' } },
    { id: 't11', num: 11, status: 'soon', title: { lt: 'Funkcijos', en: 'Functions' } }
  ];

  /* Kiekvienos temos skyriai (kortelės temos puslapyje, data-models="t1").
     Įrašo pavyzdys:
     t1: [ { id: 'm11', status: 'active', href: { lt: 'tema-1-....html', en: null },
             title: { lt: '…', en: '…' }, desc: { lt: '…', en: '…' } } ] */
  var MODELS = {};


  /* Puslapiai: failo vardas kiekviena kalba ir tėvinis puslapis (kelio juostai).
     Kai sukursite anglišką puslapį, įrašykite jo failo vardą į href.en. */
  var PAGES = {
    home:    { href: { lt: 'index.html', en: 'index.html' } },
    t1:     { parent: 'home', href: { lt: 'tema-1.html', en: null },
               title: { lt: '1 tema', en: 'Topic 1' } }
  };

  /* ------------------------------------------------------------------
     Pagalbinės funkcijos
     ------------------------------------------------------------------ */
  var LANG = (document.documentElement.lang || 'lt').slice(0, 2) === 'en' ? 'en' : 'lt';
  var OTHER = LANG === 'lt' ? 'en' : 'lt';
  var T = UI[LANG];
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function tr(obj) { return obj ? (obj[LANG] || obj.lt || '') : ''; }

  var ICON = {
    brand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13h3l3.5 7L14 4h7"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    chevR: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4"/><path d="M5 4h12l-2.5 4.5L17 13H5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="M6 13l6 6 6-6"/></svg>',
    restart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4h4"/></svg>',
    slider: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>'
  };

  /* ------------------------------------------------------------------
     3. ANTRAŠTĖ, KELIAS, PORAŠTĖ, KALBOS PERJUNGIKLIS
     ------------------------------------------------------------------ */
  function counterpartHref() {
    var p = PAGES[PAGE];
    var target = p && p.href && p.href[OTHER];
    return '../' + OTHER + '/' + (target || 'index.html');
  }

  function buildHeader() {
    var h = $('#site-header');
    if (!h) return;
    var cur = '<span aria-current="true" lang="' + LANG + '">' + LANG.toUpperCase() + '</span>';
    var oth = '<a href="' + counterpartHref() + '" hreflang="' + OTHER + '" lang="' + OTHER + '">' + OTHER.toUpperCase() + '</a>';
    var p = PAGES[PAGE];
    var back = '';
    if (p && p.parent && PAGES[p.parent]) {
      var par = PAGES[p.parent];
      var parTitle = p.parent === 'home' ? T.home : tr(par.title);
      back = '<a class="back-btn" href="' + par.href[LANG] + '" aria-label="' + esc(T.backTo(parTitle)) + '">' +
        ICON.chevL + '<span>' + esc(T.back) + '</span></a>';
      h.classList.add('has-back');
    }
    h.innerHTML =
      '<a class="skip" href="#main">' + esc(T.skip) + '</a>' +
      '<div class="wrap">' +
        '<div class="head-left">' + back +
        '<a class="brand" href="index.html" aria-label="' + esc(T.courseShort) + '"><span class="brand-mark">' + ICON.brand + '</span><span class="brand-text">' + esc(T.courseShort) + '</span></a>' +
        '</div>' +
        '<nav class="lang-switch" aria-label="' + esc(T.langLabel) + '">' +
          (LANG === 'lt' ? cur + oth : oth + cur) +
        '</nav>' +
      '</div>';
  }

  function buildCrumbs() {
    var box = $('#crumbs');
    if (!box || PAGE === 'home') return;
    var chain = [];
    var key = PAGE;
    while (key) { chain.unshift(key); key = PAGES[key] && PAGES[key].parent; }
    var html = '<ol>';
    chain.forEach(function (k, i) {
      var p = PAGES[k];
      var label = k === 'home' ? T.home : tr(p.title);
      if (i === chain.length - 1) {
        html += '<li><span aria-current="page">' + esc(label) + '</span></li>';
      } else {
        html += '<li><a href="' + p.href[LANG] + '">' + esc(label) + '</a></li>';
      }
    });
    box.setAttribute('aria-label', T.breadcrumbs);
    box.innerHTML = html + '</ol>';
  }

  function buildFooter() {
    var f = $('#site-footer');
    if (!f) return;
    f.innerHTML = '<div class="wrap"><p><strong>' + esc(T.courseFull) + '</strong></p>' +
      '<p class="credit">' + esc(T.credit) + '</p></div>';
  }

  /* ------------------------------------------------------------------
     4. PAGRINDINIO PUSLAPIO STRUKTŪRA IR MODELIŲ KORTELĖS
     ------------------------------------------------------------------ */
  function buildCoursePath() {
    var box = $('#course-path');
    if (!box) return;
    var html = '';
    COURSE.forEach(function (item) {
      var title = esc(tr(item.title));
      if (item.type === 'exam' && !(item.href && item.href[LANG])) {
        html += '<li class="is-exam is-soon"><span class="node">' + ICON.flag + '</span>' +
          '<div class="path-card" aria-disabled="true"><span class="body"><span class="kicker-row"><span class="kicker">' + esc(T.exam) + '</span>' +
          '<span class="badge">' + esc(T.soon) + '</span></span><span class="title">' + title + '</span></span></div></li>';
      } else if (item.type === 'exam') {
        html += '<li class="is-exam"><span class="node">' + ICON.flag + '</span>' +
          '<a class="path-card" href="' + item.href[LANG] + '"><span><span class="kicker">' + esc(T.exam) + '</span>' +
          '<span class="title">' + title + '</span></span>' + ICON.chevR + '</a></li>';
      } else if (item.status === 'active' && item.href && item.href[LANG]) {
        html += '<li class="is-active"><span class="node" aria-hidden="true">' + item.num + '</span>' +
          '<a class="path-card" href="' + item.href[LANG] + '"><span><span class="kicker">' + esc(T.topicN(item.num)) + '</span>' +
          '<span class="title">' + title + '</span></span>' + ICON.chevR + '</a></li>';
      } else {
        html += '<li class="is-soon"><span class="node" aria-hidden="true">' + item.num + '</span>' +
          '<div class="path-card" aria-disabled="true"><span class="body"><span class="kicker-row"><span class="kicker">' + esc(T.topicN(item.num)) + '</span>' +
          '<span class="badge">' + esc(T.soon) + '</span></span><span class="title">' + title + '</span></span></div></li>';
      }
    });
    box.innerHTML = html;
  }

  function buildModelGrid() {
    $all('[data-models]').forEach(function (box) {
      var list = MODELS[box.getAttribute('data-models')] || [];
      /* data-only / data-skip: rodyti tik nurodytus arba praleisti nurodytus skyrius (numeracija – rodomame sąraše) */
      var only = (box.getAttribute('data-only') || '').split(' ').filter(Boolean);
      var skip = (box.getAttribute('data-skip') || '').split(' ').filter(Boolean);
      var html = '', n = 0;
      list.forEach(function (m) {
        if (only.length && only.indexOf(m.id) < 0) return;
        if (skip.indexOf(m.id) >= 0) return;
        n++;
        var head = '<span class="m-no">' + esc(T.chapterN(n)) + '</span><h3>' + esc(tr(m.title)) + '</h3>' +
          '<p>' + tr(m.desc) + '</p>';
        if (m.status === 'active' && m.href && m.href[LANG]) {
          html += '<a class="model-card" href="' + m.href[LANG] + '">' + head +
            '<span class="foot"><span class="go">' + esc(T.open) + ' ' + ICON.arrowR + '</span></span></a>';
        } else {
          html += '<div class="model-card is-soon" aria-disabled="true">' + head +
            '<span class="foot"><span class="badge">' + esc(T.soon) + '</span></span></div>';
        }
      });
      box.innerHTML = html;
    });
  }

  function buildPager() {
    var box = $('#pager');
    var p = PAGES[PAGE];
    if (!box || !p || !p.parent) return;
    var parent = PAGES[p.parent];
    var html = '<a class="prev" href="' + parent.href[LANG] + '"><span class="dir">← ' + esc(T.back) + '</span>' +
      '<span class="t">' + esc(p.parent === 'home' ? T.home : tr(parent.title)) + '</span></a>';
    if (p.topic && p.model) {
      var list = MODELS[p.topic] || [];
      var idx = -1;
      list.forEach(function (m, i) { if (m.id === p.model) idx = i; });
      var nxt = list[idx + 1], nextLbl = T.nextChapter;
      if (nxt) {
        if (nxt.status === 'active' && nxt.href && nxt.href[LANG]) {
          html += '<a class="next" href="' + nxt.href[LANG] + '"><span class="dir">' + esc(nextLbl) + ' →</span>' +
            '<span class="t">' + esc(tr(nxt.title)) + '</span></a>';
        } else {
          html += '<div class="pager-soon next" aria-disabled="true"><span class="dir">' + esc(nextLbl) + '</span>' +
            '<span class="t">' + esc(tr(nxt.title)) + ' <span class="badge">' + esc(T.soon) + '</span></span></div>';
        }
      }
    }
    box.innerHTML = html;
  }

  /* ------------------------------------------------------------------
     5. SPRENDIMO PAVYZDŽIAI SU ŽINGSNIAIS
     Žymėjimas HTML: <article class="example"> ... <section class="step"> ...
     Paskutinis žingsnis su klase step--answer rodomas kaip atsakymas.
     ------------------------------------------------------------------ */
  function initExample(ex) {
    var items = $all('.step', ex);
    if (!items.length) return;
    var numbered = items.filter(function (s) { return !s.classList.contains('step--answer'); }).length;
    var shown = 0;

    items.forEach(function (s) { s.hidden = true; s.setAttribute('tabindex', '-1'); });

    var ctr = document.createElement('div');
    ctr.className = 'step-controls';
    ctr.innerHTML =
      '<div class="progress"><span class="progress-text" aria-live="polite"></span>' +
      '<span class="progress-bar" aria-hidden="true"><span></span></span></div>' +
      '<button type="button" class="btn btn-primary js-next"></button>' +
      '<button type="button" class="btn btn-ghost js-all">' + esc(T.showAll) + '</button>';
    ex.appendChild(ctr);

    var btnNext = $('.js-next', ctr);
    var btnAll = $('.js-all', ctr);
    var txt = $('.progress-text', ctr);
    var bar = $('.progress-bar span', ctr);

    function update() {
      txt.textContent = T.stepOf(Math.min(shown, numbered), numbered);
      bar.style.width = (shown / items.length * 100) + '%';
      if (shown >= items.length) {
        btnNext.innerHTML = ICON.restart + '<span>' + esc(T.restart) + '</span>';
        btnNext.className = 'btn btn-ghost js-next';
        btnAll.hidden = true;
      } else {
        var isAnswerNext = items[shown].classList.contains('step--answer');
        btnNext.innerHTML = ICON.next + '<span>' + esc(isAnswerNext ? T.showAnswerStep : T.nextStep) + '</span>';
        btnNext.className = 'btn btn-primary js-next';
        btnAll.hidden = false;
      }
    }

    function reveal(s) {
      s.hidden = false;
      s.classList.remove('is-new');
      void s.offsetWidth; // leidžia animacijai prasidėti iš naujo
      s.classList.add('is-new');
    }

    btnNext.addEventListener('click', function () {
      if (shown >= items.length) {
        items.forEach(function (s) { s.hidden = true; s.classList.remove('is-new'); });
        shown = 0;
        update();
        ex.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      reveal(items[shown]);
      shown++;
      update();
      ctr.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'nearest' });
    });

    btnAll.addEventListener('click', function () {
      for (; shown < items.length; shown++) reveal(items[shown]);
      update();
    });

    update();
  }

  /* ------------------------------------------------------------------
     6. TESTO KLAUSIMAI
     Atviras:  <article class="q" data-type="open" data-time="1,5">
                 <p class="q-text">…</p>
                 <div class="q-answer">…</div>
                 <div class="q-solution">…</div>   (neprivaloma)
               </article>
     Variantai: <article class="q" data-type="mc">
                 <p class="q-text">…</p>
                 <ol class="q-options"><li data-correct>…</li><li>…</li></ol>
                 <div class="q-explain">…</div>     (neprivaloma)
               </article>
     ------------------------------------------------------------------ */
  function initQuestion(q, index, numbering) {
    var type = q.getAttribute('data-type') || 'open';
    var meta = document.createElement('div');
    meta.className = 'q-meta';
    var label = numbering === 'task' ? T.taskN(index + 1) : T.question(index + 1);
    var left = '<span><span class="q-num">' + esc(label) + '</span>' +
      (q.hasAttribute('data-draft') ? ' <span class="badge badge--draft">' + esc(T.draft) + '</span>' : '') + '</span>';
    var time = q.getAttribute('data-time');
    var right = time ? '<span class="q-time" title="' + esc(T.timeTitle) + '">' + ICON.clock + esc(T.minutes(time)) + '</span>' :
      (type === 'mc' ? '<span class="q-kind">' + esc(T.mcQ) + '</span>' : '');
    meta.innerHTML = left + right;
    q.insertBefore(meta, q.firstChild);

    if (type === 'mc') initMC(q); else initOpen(q);
  }

  function wrapReveal(el, cls, label) {
    el.classList.add('q-reveal', cls);
    var lab = document.createElement('span');
    lab.className = 'label';
    lab.textContent = label;
    el.insertBefore(lab, el.firstChild);
    el.hidden = true;
    if (!el.id) el.id = 'r' + Math.random().toString(36).slice(2, 9);
  }

  function toggleButton(target, showLabel, hideLabel, primary) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn ' + (primary ? 'btn-primary' : 'btn-soft');
    b.setAttribute('aria-expanded', 'false');
    b.setAttribute('aria-controls', target.id);
    b.textContent = showLabel;
    b.addEventListener('click', function () {
      var open = target.hidden;
      target.hidden = !open;
      b.setAttribute('aria-expanded', String(open));
      b.textContent = open ? hideLabel : showLabel;
    });
    return b;
  }

  function initOpen(q) {
    var ans = $('.q-answer', q);
    var sol = $('.q-solution', q);
    var hint = document.createElement('p');
    hint.className = 'q-hint';
    hint.textContent = T.solveFirst;
    var text = $('.q-text', q);
    if (text) text.insertAdjacentElement('afterend', hint);

    var actions = document.createElement('div');
    actions.className = 'q-actions';
    if (ans) {
      wrapReveal(ans, 'q-answer', T.answer);
      actions.appendChild(toggleButton(ans, T.showAnswer, T.hideAnswer, true));
    }
    if (sol) {
      wrapReveal(sol, 'q-solution', T.solution);
      actions.appendChild(toggleButton(sol, T.showSolution, T.hideSolution, false));
    }
    hint.insertAdjacentElement('afterend', actions);
    // Atsakymas ir sprendimas – po mygtukais
    if (ans) actions.insertAdjacentElement('afterend', ans);
    if (sol) (ans || actions).insertAdjacentElement('afterend', sol);
  }

  function initMC(q) {
    var list = $('.q-options', q);
    if (!list) return;
    var explain = $('.q-explain', q);
    if (explain) wrapReveal(explain, 'q-explain', T.explanation);
    var letters = 'ABCDEFGH';
    var opts = $all('li', list);
    var feedback = document.createElement('p');
    feedback.className = 'q-feedback';
    feedback.hidden = true;
    feedback.setAttribute('aria-live', 'polite');
    list.insertAdjacentElement('afterend', feedback);
    if (explain) feedback.insertAdjacentElement('afterend', explain);

    var retry = document.createElement('div');
    retry.className = 'q-actions';
    retry.hidden = true;
    retry.innerHTML = '<button type="button" class="btn btn-ghost">' + ICON.restart + '<span>' + esc(T.tryAgain) + '</span></button>';
    (explain || feedback).insertAdjacentElement('afterend', retry);

    var buttons = opts.map(function (li, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'q-opt';
      b.innerHTML = '<span class="letter" aria-hidden="true">' + letters[i] + '</span><span class="opt-text">' + li.innerHTML + '</span>';
      if (li.hasAttribute('data-correct')) b.setAttribute('data-correct', '');
      li.innerHTML = '';
      li.appendChild(b);
      return b;
    });

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var ok = b.hasAttribute('data-correct');
        buttons.forEach(function (o) {
          o.disabled = true;
          if (o.hasAttribute('data-correct')) o.classList.add('is-correct');
          else if (o === b) o.classList.add('is-wrong');
          else o.classList.add('is-dim');
        });
        feedback.className = 'q-feedback ' + (ok ? 'ok' : 'bad');
        feedback.innerHTML = (ok ? ICON.check : ICON.cross) + '<span>' + esc(ok ? T.correct : T.incorrect) + '</span>';
        feedback.hidden = false;
        if (explain) explain.hidden = false;
        retry.hidden = false;
      });
    });

    retry.querySelector('button').addEventListener('click', function () {
      buttons.forEach(function (o) { o.disabled = false; o.classList.remove('is-correct', 'is-wrong', 'is-dim'); });
      feedback.hidden = true;
      if (explain) explain.hidden = true;
      retry.hidden = true;
      buttons[0].focus();
    });
  }

  /* ------------------------------------------------------------------
     7. SĄVOKŲ IŠŠOKANTYS LANGELIAI
     <button type="button" class="term" data-def="Apibrėžimas">sąvoka</button>
     ------------------------------------------------------------------ */
  var pop = null, popOwner = null;

  function closePop() {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    if (popOwner) popOwner.setAttribute('aria-expanded', 'false');
    popOwner = null;
  }

  function openPop(term) {
    if (!pop) {
      pop = document.createElement('div');
      pop.className = 'popover';
      pop.id = 'term-popover';
      pop.setAttribute('role', 'tooltip');
      pop.hidden = true;
      document.body.appendChild(pop);
    }
    if (popOwner === term && !pop.hidden) { closePop(); return; }
    closePop();
    pop.innerHTML = '<span class="pop-term">' + esc(term.getAttribute('data-term') || term.textContent) + '</span>' +
      '<span>' + term.getAttribute('data-def') + '</span>';
    renderMath(pop);
    pop.hidden = false;
    popOwner = term;
    term.setAttribute('aria-expanded', 'true');
    term.setAttribute('aria-describedby', 'term-popover');

    var r = term.getClientRects()[0] || term.getBoundingClientRect();
    var w = pop.offsetWidth, h = pop.offsetHeight;
    var vw = document.documentElement.clientWidth;
    var center = r.left + r.width / 2;
    var left = Math.max(16, Math.min(center - w / 2, vw - w - 16));
    var above = (r.bottom + h + 12 > window.innerHeight) && (r.top - h - 12 > 0);
    var top = above ? r.top - h - 10 : r.bottom + 10;
    pop.classList.toggle('is-above', above);
    pop.style.left = (left + window.scrollX) + 'px';
    pop.style.top = (top + window.scrollY) + 'px';
    pop.style.setProperty('--arrow-x', Math.max(14, Math.min(center - left, w - 14)) + 'px');
  }

  function initTerms() {
    var terms = $all('.term');
    if (!terms.length) return;
    terms.forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
      t.addEventListener('click', function (e) { e.stopPropagation(); openPop(t); });
    });
    document.addEventListener('click', function (e) { if (pop && !pop.contains(e.target)) closePop(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var o = popOwner; closePop(); if (o) o.focus(); } });
    window.addEventListener('resize', closePop);
  }

  /* ------------------------------------------------------------------
     8. INTERAKTYVUS TIESĖS BRĖŽINYS  (<div data-widget="line-explorer">)
     ------------------------------------------------------------------ */
  function fmtNum(v) {
    var s = (Math.round(v * 10) / 10).toString();
    return T.decimal === ',' ? s.replace('.', ',') : s;
  }
  function texNum(v) {
    var s = (Math.round(v * 10) / 10).toString();
    return T.decimal === ',' ? s.replace('.', '{,}') : s;
  }

  /* ------------------------------------------------------------------
     8a. PAKLAUSOS IR PASIŪLOS GRAFIKAS
     <div data-widget="market-chart" data-a="-0.04" data-b="560" data-c="0.06" data-d="160"
          data-xmax="7000" data-ymax="600" data-numeric="1"></div>
     Paklausa p = ax + b, pasiūla p = cx + d. data-numeric="0" – be skaičių (p_e, x_e).
     ------------------------------------------------------------------ */
  function clean(v) { return Number(Number(v).toPrecision(10)); }
  function decStr(v) { var s = String(clean(v)); return T.decimal === ',' ? s.replace('.', ',') : s; }
  function decTex(v) { var s = String(clean(v)); return T.decimal === ',' ? s.replace('.', '{,}') : s; }
  function lineTex(m, k) {
    var t = 'p = ' + (m < 0 ? '-' : '') + decTex(Math.abs(m)) + 'x';
    if (k !== 0) t += (k < 0 ? ' - ' : ' + ') + decTex(Math.abs(k));
    return t;
  }

  function initMarketChart(box) {
    var a = +box.getAttribute('data-a'), b = +box.getAttribute('data-b');
    var c = +box.getAttribute('data-c'), d = +box.getAttribute('data-d');
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var numeric = box.getAttribute('data-numeric') === '1';
    var xe = clean((b - d) / (c - a)), pe = clean(a * xe + b);
    var L = 56, B = 206, W = 262, H = 180;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(p) { return +(B - p / ymax * H).toFixed(1); }
    var qd = Math.min(xmax, -b / a), qs = Math.min(xmax, (ymax - d) / c);
    var ex = X(xe), ey = Y(pe);
    var sub = function (base, s) { return '<tspan class="i">' + base + '</tspan><tspan class="i" font-size="10" dy="4">' + s + '</tspan>'; };

    var yTicks = numeric ? [b, pe, d] : [pe];
    var ticks = '';
    var used = [];
    yTicks.forEach(function (v) {
      var y = Y(v);
      if (used.some(function (u) { return Math.abs(u - y) < 13; })) return;
      used.push(y);
      ticks += '<line class="ax" x1="' + (L - 4) + '" y1="' + y + '" x2="' + L + '" y2="' + y + '"/>' +
        '<text class="muted" x="' + (L - 7) + '" y="' + (y + 4) + '" text-anchor="end">' +
        (numeric ? decStr(v) : sub('p', 'e')) + '</text>';
    });
    ticks += '<text class="muted" x="' + ex + '" y="' + (B + 17) + '" text-anchor="middle">' +
      (numeric ? decStr(xe) : sub('x', 'e')) + '</text>';

    var svg =
      '<svg viewBox="0 0 340 250" role="img" aria-label="' + esc(T.marketChart) +
        (numeric ? ' (' + decStr(xe) + '; ' + decStr(pe) + ')' : '') + '">' +
      '<line class="guide" x1="' + ex + '" y1="' + ey + '" x2="' + ex + '" y2="' + B + '"/>' +
      '<line class="guide" x1="' + L + '" y1="' + ey + '" x2="' + ex + '" y2="' + ey + '"/>' +
      '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
      '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
      '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
      '<text x="2" y="12" style="font-size:12px"><tspan class="i">p</tspan>, ' + esc(T.unitEur) + '</text>' +
      '<text x="336" y="246" text-anchor="end"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>' +
      ticks +
      '<line class="ln" x1="' + X(0) + '" y1="' + Y(b) + '" x2="' + X(qd) + '" y2="' + Y(a * qd + b) + '"/>' +
      '<line class="ln2" x1="' + X(0) + '" y1="' + Y(d) + '" x2="' + X(qs) + '" y2="' + Y(c * qs + d) + '"/>' +
      '<text class="acc b" x="' + (X(qd) + 5) + '" y="' + (Y(a * qd + b) + 5) + '">D</text>' +
      '<text class="c2 b" x="' + (X(qs) + 5) + '" y="' + (Y(c * qs + d) + 5) + '">S</text>' +
      '<circle class="pt-hi" cx="' + ex + '" cy="' + ey + '" r="6"/>' +
      '<text class="exam b" x="' + ex + '" y="' + (ey - 12) + '" text-anchor="middle">E</text>' +
      '</svg>';

    var legend = '<ul class="chart-legend">' +
      '<li><span class="sw"></span><span>' + esc(T.demand) + (numeric ? ': <span class="js-tex" data-tex="' + esc(lineTex(a, b)) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-s"></span><span>' + esc(T.supply) + (numeric ? ': <span class="js-tex" data-tex="' + esc(lineTex(c, d)) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.eqPoint) + (numeric ? ': <span class="js-tex" data-tex="(' + decTex(xe) + ';\\,' + decTex(pe) + ')"></span>' : '') + '</span></li>' +
      '</ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* ------------------------------------------------------------------
     8b. LŪŽIO TAŠKO GRAFIKAS (pajamos R ir bendrosios sąnaudos TC)
     <div data-widget="breakeven-chart" data-p="19" data-v="7" data-f="21600"
          data-xmax="3000" data-ymax="60000" data-numeric="1"></div>
     R(x) = p·x, TC(x) = F + V·x. data-numeric="0" – vietoj skaičių F ir x_L.
     ------------------------------------------------------------------ */
  function initBreakEvenChart(box) {
    var p = +box.getAttribute('data-p'), V = +box.getAttribute('data-v'), F = +box.getAttribute('data-f');
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var numeric = box.getAttribute('data-numeric') === '1';
    var xl = clean(F / (p - V)), yl = clean(p * xl);
    var L = 56, B = 206, W = 250, H = 180;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(v) { return +(B - v / ymax * H).toFixed(1); }
    var qr = Math.min(xmax, ymax / p), qc = Math.min(xmax, (ymax - F) / V);
    var lx = X(xl), ly = Y(yl), letter = T.beLetter;
    var sub = function (base, s) { return '<tspan class="i">' + base + '</tspan><tspan class="i" font-size="10" dy="4">' + s + '</tspan>'; };
    var qe = Math.min(qr, qc);

    var svg =
      '<svg viewBox="0 0 340 250" role="img" aria-label="' + esc(T.beChart) +
        (numeric ? ' (' + decStr(xl) + ')' : '') + '">' +
      // nuostolio ir pelno sritys
      '<path class="zone-loss" d="M' + X(0) + ' ' + Y(0) + 'L' + X(0) + ' ' + Y(F) + 'L' + lx + ' ' + ly + 'Z"/>' +
      '<path class="zone-profit" d="M' + lx + ' ' + ly + 'L' + X(qe) + ' ' + Y(p * qe) + 'L' + X(qe) + ' ' + Y(F + V * qe) + 'Z"/>' +
      '<line class="guide" x1="' + lx + '" y1="' + ly + '" x2="' + lx + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
      '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
      '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
      '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
      '<text x="2" y="12" style="font-size:12px">' + esc(T.unitEur) + '</text>' +
      '<text x="336" y="246" text-anchor="end"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>' +
      '<line class="ax" x1="' + (L - 4) + '" y1="' + Y(F) + '" x2="' + L + '" y2="' + Y(F) + '"/>' +
      '<text class="muted" x="' + (L - 7) + '" y="' + (Y(F) + 4) + '" text-anchor="end">' +
        (numeric ? decStr(F) : '<tspan class="i">F</tspan>') + '</text>' +
      '<text class="muted" x="' + lx + '" y="' + (B + 17) + '" text-anchor="middle">' +
        (numeric ? decStr(xl) : sub('x', letter)) + '</text>' +
      '<line class="ln" x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(qr) + '" y2="' + Y(p * qr) + '"/>' +
      '<line class="ln2" x1="' + X(0) + '" y1="' + Y(F) + '" x2="' + X(qc) + '" y2="' + Y(F + V * qc) + '"/>' +
      '<text class="acc b" x="' + (X(qr) + 5) + '" y="' + (Y(p * qr) + 5) + '">R</text>' +
      '<text class="c2 b" x="' + (X(qc) + 5) + '" y="' + (Y(F + V * qc) + 5) + '">TC</text>' +
      '<circle class="pt-hi" cx="' + lx + '" cy="' + ly + '" r="6"/>' +
      '<text class="exam b" x="' + (lx - 10) + '" y="' + (ly - 8) + '" text-anchor="end">' + letter + '</text>' +
      '</svg>';

    var rTex = 'R(x) = ' + decTex(p) + 'x';
    var cTex = 'TC(x) = ' + decTex(F) + ' + ' + decTex(V) + 'x';
    var legend = '<ul class="chart-legend">' +
      '<li><span class="sw"></span><span>' + esc(T.revenue) + (numeric ? ': <span class="js-tex" data-tex="' + esc(rTex) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-s"></span><span>' + esc(T.cost) + (numeric ? ': <span class="js-tex" data-tex="' + esc(cTex) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.bePoint) + (numeric ? ': <span class="js-tex" data-tex="x_' + letter + ' = ' + decTex(xl) + '"></span>' : '') + '</span></li>' +
      '<li><span class="sw sw-zone sw-loss"></span><span>' + esc(T.lossZone) + ' <span class="js-tex" data-tex="(x &lt; x_' + letter + ')"></span></span></li>' +
      '<li><span class="sw sw-zone sw-profit"></span><span>' + esc(T.profitZone) + ' <span class="js-tex" data-tex="(x &gt; x_' + letter + ')"></span></span></li>' +
      '</ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* Gamybos priemonių pasirinkimo grafikas.
     data-lines="a:0:230|b:70000:90|c:250000:10" – būdo pavadinimas : F : V (TC = F + V·x).
     Žemiausiai esanti tiesė (mažiausios sąnaudos) paryškinama, jos lūžio taškai pažymimi,
     po x ašimi rodoma juosta „pigiausias būdas“. data-annotate="1" – privalomų grafiko elementų žymos 1–4. */
  function initMeansChart(box) {
    var lines = box.getAttribute('data-lines').split('|').map(function (t, i) {
      var a = t.split(':');
      return { name: a[0], F: +a[1], V: +a[2], i: i };
    });
    var xmax = +box.getAttribute('data-xmax'), ymax = +box.getAttribute('data-ymax');
    var xstep = +box.getAttribute('data-xstep') || 0, ystep = +box.getAttribute('data-ystep') || 0;
    var numeric = box.getAttribute('data-numeric') !== '0';
    var annotate = box.getAttribute('data-annotate') === '1';
    var L = 58, B = 206, W = 250, H = 180, TOP = B - H;
    function X(q) { return +(L + q / xmax * W).toFixed(1); }
    function Y(v) { return +(B - v / ymax * H).toFixed(1); }
    function tc(l, x) { return l.F + l.V * x; }
    var cls = ['ln', 'ln2', 'ln3'], tcls = ['c1', 'c2', 'c3'], sw = ['', ' sw-s', ' sw-3'];
    function texName(n) { return /^[IVX]+$/.test(n) ? '\\mathrm{' + n + '}' : n; }
    function subName(n) {
      return 'TC<tspan font-size="10" dy="4">' + esc(n) + '</tspan>';
    }

    // Žemiausiai esanti tiesė: kurios tiesės sąnaudos mažiausios kiekviename intervale
    function lowest(x) {
      var best = lines[0];
      lines.forEach(function (l) { if (tc(l, x) < tc(best, x) - 1e-9) best = l; });
      return best;
    }
    var segs = [], N = 2000, cur = lowest(0), start = 0;
    for (var k = 1; k <= N; k++) {
      var xx = xmax * k / N, nb = lowest(xx);
      if (nb !== cur) {
        var xs = clean((nb.F - cur.F) / (cur.V - nb.V));
        segs.push({ l: cur, a: start, b: xs });
        cur = nb; start = xs;
      }
    }
    segs.push({ l: cur, a: start, b: xmax });
    var bps = segs.slice(1).map(function (sg) { return { x: sg.a, y: clean(tc(sg.l, sg.a)) }; });

    var g = '';
    // tinklelis ir padalos (vienetinė atkarpa)
    if (numeric && xstep) for (var gx = xstep; gx <= xmax + 1e-9; gx += xstep)
      g += '<line class="grid" x1="' + X(gx) + '" y1="' + TOP + '" x2="' + X(gx) + '" y2="' + B + '"/>' +
           '<line class="ax" x1="' + X(gx) + '" y1="' + B + '" x2="' + X(gx) + '" y2="' + (B + 4) + '"/>';
    if (numeric && ystep) for (var gy = ystep; gy <= ymax + 1e-9; gy += ystep)
      g += '<line class="grid" x1="' + L + '" y1="' + Y(gy) + '" x2="' + (L + W) + '" y2="' + Y(gy) + '"/>' +
           '<line class="ax" x1="' + (L - 4) + '" y1="' + Y(gy) + '" x2="' + L + '" y2="' + Y(gy) + '"/>' +
           '<text class="muted" style="font-size:11px" x="' + (L - 7) + '" y="' + (Y(gy) + 4) + '" text-anchor="end">' + decStr(gy) + '</text>';

    // mažiausių sąnaudų laužtė
    var env = segs.map(function (sg) { return X(sg.a) + ',' + Y(tc(sg.l, sg.a)) + ' ' + X(sg.b) + ',' + Y(tc(sg.l, sg.b)); }).join(' ');
    g += '<polyline class="env" points="' + env + '"/>';

    // susikirtimo taškų pagalbinės linijos
    bps.forEach(function (p) {
      g += '<line class="guide" x1="' + X(p.x) + '" y1="' + Y(p.y) + '" x2="' + X(p.x) + '" y2="' + B + '"/>';
    });

    // ašys
    g += '<line class="ax" x1="' + (L - 8) + '" y1="' + B + '" x2="' + (L + W + 10) + '" y2="' + B + '"/>' +
         '<line class="ax" x1="' + L + '" y1="' + (B + 8) + '" x2="' + L + '" y2="18"/>' +
         '<path class="ah" d="M' + (L + W + 18) + ' ' + B + 'L' + (L + W + 9) + ' ' + (B - 4.5) + 'L' + (L + W + 9) + ' ' + (B + 4.5) + 'Z"/>' +
         '<path class="ah" d="M' + L + ' 10L' + (L - 4.5) + ' 19L' + (L + 4.5) + ' 19Z"/>' +
         '<text x="' + (L + 9) + '" y="16" style="font-size:12px"><tspan class="i">TC</tspan>, ' + esc(T.unitEur) + '</text>' +
         '<text x="336" y="262" text-anchor="end" style="font-size:12px"><tspan class="i">x</tspan>, ' + esc(T.unitQty) + '</text>' +
         '<text class="muted" x="' + (L - 7) + '" y="' + (B + 15) + '" text-anchor="end">0</text>';

    // x ašies užrašai: susikirtimo taškų kiekiai paryškinti, artimi įprasti užrašai praleidžiami
    if (numeric) {
      // pirmiausia susikirtimo taškų kiekiai, tada įprasti užrašai, kurie su jais nepersidengia
      var placed = [{ a: L - 16, b: L - 2 }];
      var span = function (x, str) { var w = str.length * 7 + 4; return { a: x - w / 2, b: x + w / 2 }; };
      var free = function (sp) { return placed.every(function (o) { return sp.b < o.a || sp.a > o.b; }); };
      bps.forEach(function (p) {
        var str = decStr(p.x); placed.push(span(X(p.x), str));
        g += '<text class="exam" style="font-size:11px;font-weight:700" x="' + X(p.x) + '" y="' + (B + 15) + '" text-anchor="middle">' + str + '</text>';
      });
      if (xstep) for (var lx = xstep; lx <= xmax + 1e-9; lx += xstep) {
        var str2 = decStr(clean(lx)), sp2 = span(X(lx), str2);
        if (free(sp2)) {
          placed.push(sp2);
          g += '<text class="muted" style="font-size:11px" x="' + X(lx) + '" y="' + (B + 15) + '" text-anchor="middle">' + str2 + '</text>';
        }
      }
    }

    // juosta „pigiausias būdas“
    var sy = B + 22;
    g += '<text class="muted" style="font-size:10px" x="' + (L - 6) + '" y="' + (sy + 10) + '" text-anchor="end">' + esc(T.cheapest) + '</text>';
    segs.forEach(function (sg) {
      var x1 = X(sg.a) + (sg.a > 0 ? 1 : 0), x2 = X(sg.b) - (sg.b < xmax ? 1 : 0);
      g += '<rect class="strip s' + (sg.l.i + 1) + '" x="' + x1 + '" y="' + sy + '" width="' + Math.max(0, x2 - x1).toFixed(1) + '" height="14" rx="3"/>';
      if (x2 - x1 > 16) g += '<text style="font-size:11px;font-weight:700" x="' + ((x1 + x2) / 2).toFixed(1) + '" y="' + (sy + 11) + '" text-anchor="middle">' + esc(sg.l.name) + '</text>';
    });

    // tiesės ir jų pavadinimai
    var labs = [];
    lines.forEach(function (l) {
      var xe = xmax, ye = tc(l, xmax), top = false;
      if (ye > ymax) { xe = (ymax - l.F) / l.V; ye = ymax; top = true; }
      g += '<line class="' + cls[l.i] + '" x1="' + X(0) + '" y1="' + Y(l.F) + '" x2="' + X(xe) + '" y2="' + Y(ye) + '"/>';
      labs.push({ l: l, x: X(xe) + (top ? 4 : 5), y: Y(ye) + (top ? 13 : 4), top: top });
    });
    var side = labs.filter(function (o) { return !o.top; }).sort(function (a, b) { return a.y - b.y; });
    for (var s2 = 1; s2 < side.length; s2++) if (side[s2].y - side[s2 - 1].y < 13) side[s2].y = side[s2 - 1].y + 13;
    labs.forEach(function (o) {
      g += '<text class="' + tcls[o.l.i] + ' b" x="' + o.x + '" y="' + o.y + '">' + subName(o.l.name) + '</text>';
    });

    // susikirtimo taškai
    bps.forEach(function (p) { g += '<circle class="pt-hi" cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="5.5"/>'; });

    // privalomų elementų žymos
    if (annotate) {
      var badge = function (n, x, y) {
        return '<g class="badge"><circle cx="' + x + '" cy="' + y + '" r="7.5"/><text x="' + x + '" y="' + (y + 3.6) + '" text-anchor="middle">' + n + '</text></g>';
      };
      var hi = labs.slice().sort(function (a, b) { return a.y - b.y; })[0];
      if (xstep) g += '<line class="leg" style="stroke-width:3.5" x1="' + L + '" y1="' + B + '" x2="' + X(xstep) + '" y2="' + B + '"/>';
      if (ystep) g += '<line class="leg" style="stroke-width:3.5" x1="' + L + '" y1="' + B + '" x2="' + L + '" y2="' + Y(ystep) + '"/>';
      g += badge(1, L + 66, 12) + badge(1, 276, 258) +
           badge(2, L - 24, B + 11) +
           (xstep ? badge(3, ((L + X(xstep)) / 2).toFixed(1), B + 11) : '') +
           badge(4, (hi.x + 9).toFixed(1), hi.y - 17 < 8 ? hi.y + 13 : hi.y - 17);
    }

    var svg = '<svg viewBox="0 0 340 268" role="img" aria-label="' + esc(T.meansChart) + '">' + g + '</svg>';

    var legend = '<ul class="chart-legend">';
    lines.forEach(function (l) {
      var f = l.F ? decTex(l.F) + ' + ' + decTex(l.V) + 'x' : decTex(l.V) + 'x';
      var tex = 'TC_{' + texName(l.name) + '}' + (numeric ? '(x) = ' + f : '');
      legend += '<li><span class="sw' + sw[l.i] + '"></span><span class="js-tex" data-tex="' + esc(tex) + '"></span></li>';
    });
    legend += '<li><span class="sw sw-env"></span><span>' + esc(T.lowestCost) + '</span></li>' +
      '<li><span class="sw sw-e"></span><span>' + esc(T.crossPoint) + '</span></li></ul>';

    box.classList.add('fig', 'market-chart');
    box.innerHTML = svg + legend;
    $all('.js-tex', box).forEach(function (el) { renderInline(el, el.getAttribute('data-tex')); });
  }

  /* Statiniai užrašai, kurių tekstas imamas iš UI žodyno: <tspan data-i18n="unitYears">metai</tspan> */
  function fillI18n() {
    $all('[data-i18n]').forEach(function (el) {
      var v = T[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
  }

  function initLineExplorer(box) {
    var S = 26, O = 156, N = 5; // mastelis, centras, ašių ribos ±5
    var grid = '';
    for (var i = -N; i <= N; i++) {
      if (i === 0) continue;
      grid += '<line class="grid" x1="' + (O + i * S) + '" y1="' + (O - N * S - 6) + '" x2="' + (O + i * S) + '" y2="' + (O + N * S + 6) + '"/>';
      grid += '<line class="grid" x1="' + (O - N * S - 6) + '" y1="' + (O + i * S) + '" x2="' + (O + N * S + 6) + '" y2="' + (O + i * S) + '"/>';
    }
    box.classList.add('tryit');
    box.innerHTML =
      '<p class="tryit-title">' + ICON.slider + esc(T.tryIt) + '</p>' +
      '<p class="tryit-note" style="margin:0 0 6px">' + esc(T.tryItHint) + '</p>' +
      '<div class="tryit-eq" aria-live="polite"></div>' +
      '<svg class="plot" viewBox="0 0 312 312" role="img" aria-label="y = mx + b">' +
        '<defs><clipPath id="le-clip"><rect x="' + (O - N * S - 6) + '" y="' + (O - N * S - 6) + '" width="' + (2 * N * S + 12) + '" height="' + (2 * N * S + 12) + '"/></clipPath></defs>' + grid +
        '<line class="ax" x1="4" y1="' + O + '" x2="302" y2="' + O + '"/>' +
        '<line class="ax" x1="' + O + '" y1="10" x2="' + O + '" y2="308"/>' +
        '<path class="ah" d="M310 ' + O + 'L301 ' + (O - 4.5) + 'L301 ' + (O + 4.5) + 'Z"/>' +
        '<path class="ah" d="M' + O + ' 2L' + (O - 4.5) + ' 11L' + (O + 4.5) + ' 11Z"/>' +
        '<text class="m" x="296" y="' + (O - 8) + '">x</text>' +
        '<text class="m" x="' + (O + 8) + '" y="16">y</text>' +
        '<line class="ln js-line" clip-path="url(#le-clip)" x1="0" y1="0" x2="0" y2="0"/>' +
        '<circle class="pt-hi js-b" r="6" cx="' + O + '" cy="' + O + '"/>' +
      '</svg>' +
      '<div class="ctrl"><label for="le-m" class="m-lab"></label><input id="le-m" type="range" min="-3" max="3" step="0.5" value="1"><output for="le-m"></output></div>' +
      '<div class="ctrl"><label for="le-b" class="b-lab"></label><input id="le-b" type="range" min="-4" max="4" step="0.5" value="2"><output for="le-b"></output></div>' +
      '<p class="tryit-note js-note"></p>';

    var mIn = $('#le-m', box), bIn = $('#le-b', box);
    var mOut = $('output[for="le-m"]', box), bOut = $('output[for="le-b"]', box);
    var line = $('.js-line', box), dot = $('.js-b', box);
    var eq = $('.tryit-eq', box), note = $('.js-note', box);
    renderInline($('.m-lab', box), 'm');
    renderInline($('.b-lab', box), 'b');

    function draw() {
      var m = parseFloat(mIn.value), b = parseFloat(bIn.value);
      var x1 = -6, x2 = 6;
      line.setAttribute('x1', O + x1 * S); line.setAttribute('y1', O - (m * x1 + b) * S);
      line.setAttribute('x2', O + x2 * S); line.setAttribute('y2', O - (m * x2 + b) * S);
      dot.setAttribute('cy', O - b * S);
      mOut.textContent = fmtNum(m); bOut.textContent = fmtNum(b);
      var mx = m === 0 ? '' : (m === 1 ? 'x' : (m === -1 ? '-x' : texNum(m) + 'x'));
      var bb = b === 0 ? '' : ((mx ? (b > 0 ? ' + ' : ' - ') : (b < 0 ? '-' : '')) + texNum(Math.abs(b)));
      var tex = 'y = ' + ((mx + bb) || '0');
      renderInline(eq, tex);
      var slope = m > 0 ? T.slopeUp : (m < 0 ? T.slopeDown : T.slopeZero);
      note.textContent = slope + '. ' + T.intercept(fmtNum(b)) + '.';
    }
    mIn.addEventListener('input', draw);
    bIn.addEventListener('input', draw);
    draw();
  }

  /* ------------------------------------------------------------------
     8b. IŠVESTINĖS IŠVEDIMO BRĖŽINYS  (<div data-widget="deriv-explorer">)
     Vartojimo išlaidų funkcija C(x) = 100 + 0,9x − 0,0001x²; taškas A(1000; 900), C'(1000) = 0,7.
     Slankikliu keičiamas Δx: kirstinė per A ir B(1000 + Δx; C(1000 + Δx)) artėja prie liestinės.
     ------------------------------------------------------------------ */
  function initDerivExplorer(box) {
    var f = function (x) { return 100 + 0.9 * x - 0.0001 * x * x; };
    var X0 = 1000, Y0 = f(X0), D0 = 0.7;            // A(1000; 900), C'(1000) = 0,7
    var SX = 0.065, SY = 0.115, OX = 44, OY = 308;
    var XMAX = 4300, YMAX = 2600, XMIN = -400, YMIN = -230;
    var X = function (x) { return OX + x * SX; }, Y = function (y) { return OY - y * SY; };
    var r1 = function (v) { return Math.round(v * 10) / 10; };
    var grid = '', ticks = '', i;
    for (i = 1000; i <= 4000; i += 1000) {
      grid += '<line class="grid" x1="' + r1(X(i)) + '" y1="' + r1(Y(YMAX)) + '" x2="' + r1(X(i)) + '" y2="' + r1(Y(YMIN)) + '"/>';
      ticks += '<text class="muted" x="' + r1(X(i)) + '" y="' + (OY + 16) + '" text-anchor="middle">' + i + '</text>';
    }
    for (i = 500; i <= 2500; i += 500) {
      grid += '<line class="grid" x1="' + r1(X(XMIN)) + '" y1="' + r1(Y(i)) + '" x2="' + r1(X(XMAX)) + '" y2="' + r1(Y(i)) + '"/>';
      ticks += '<text class="muted" x="' + (OX - 6) + '" y="' + r1(Y(i) + 4) + '" text-anchor="end">' + i + '</text>';
    }
    var pts = [];
    for (var x = 0; x <= XMAX + 1e-9; x += 50) pts.push(r1(X(x)) + ' ' + r1(Y(f(x))));
    var W = r1(X(XMAX) + 14), H = r1(Y(YMIN) + 4);
    box.classList.add('tryit');
    box.innerHTML =
      '<p class="tryit-title">' + ICON.slider + esc(T.tryIt) + '</p>' +
      '<p class="tryit-note" style="margin:0 0 6px">' + esc(T.derivHint) + '</p>' +
      '<div class="tryit-eq js-sec" aria-live="polite"></div>' +
      '<svg class="plot" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(T.derivAria) + '">' +
        '<defs><clipPath id="de-clip"><rect x="' + r1(X(XMIN)) + '" y="' + r1(Y(YMAX)) + '" width="' + r1(X(XMAX) - X(XMIN)) + '" height="' + r1(Y(YMIN) - Y(YMAX)) + '"/></clipPath></defs>' +
        grid + ticks +
        '<line class="ax" x1="' + r1(X(XMIN)) + '" y1="' + OY + '" x2="' + (W - 6) + '" y2="' + OY + '"/>' +
        '<line class="ax" x1="' + OX + '" y1="' + H + '" x2="' + OX + '" y2="8"/>' +
        '<path class="ah" d="M' + W + ' ' + OY + 'L' + (W - 9) + ' ' + (OY - 4.5) + 'L' + (W - 9) + ' ' + (OY + 4.5) + 'Z"/>' +
        '<path class="ah" d="M' + OX + ' 0L' + (OX - 4.5) + ' 9L' + (OX + 4.5) + ' 9Z"/>' +
        '<text class="m" x="' + (W - 12) + '" y="' + (OY - 8) + '">x</text>' +
        '<text class="m" x="' + (OX + 8) + '" y="14">C</text>' +
        '<g clip-path="url(#de-clip)">' +
          '<path class="ln" d="M' + pts.join('L') + '"/>' +
          '<line class="ln2-dash js-tan"/>' +
          '<line class="ln3 js-secl"/>' +
        '</g>' +
        '<line class="guide js-dx"/><line class="guide js-dy"/>' +
        '<text class="m js-dxl" text-anchor="middle">Δx</text><text class="m js-dyl">Δy</text>' +

        '<circle class="pt js-b" r="5.5"/><text class="js-bl" style="font-weight:700">B</text>' +
        '<circle class="pt-hi" r="6" cx="' + r1(X(X0)) + '" cy="' + r1(Y(Y0)) + '"/>' +
        '<text x="' + r1(X(X0) - 16) + '" y="' + r1(Y(Y0) + 4) + '" style="font-weight:700">A</text>' +
      '</svg>' +
      '<ul class="chart-legend"><li><span class="sw" aria-hidden="true"></span><span class="js-fx"></span></li>' +
        '<li><span class="sw sw-3" aria-hidden="true"></span>' + esc(T.secant) + '</li>' +
        '<li><span class="sw sw-dash" aria-hidden="true"></span>' + esc(T.tangent) + '</li></ul>' +
      '<div class="ctrl"><label for="de-h" class="h-lab"></label><input id="de-h" type="range" min="0" max="2000" step="100" value="2000"><output for="de-h"></output></div>' +
      '<div class="tryit-eq js-tanv" style="font-size:1rem"></div>' +
      '<p class="tryit-note js-note"></p>';

    var hIn = $('#de-h', box), hOut = $('output[for="de-h"]', box);
    var el = function (c) { return $('.' + c, box); };
    var tan = el('js-tan'), sec = el('js-secl'), dx = el('js-dx'), dy = el('js-dy');
    var dxl = el('js-dxl'), dyl = el('js-dyl'), b = el('js-b'), bl = el('js-bl');
    var note = el('js-note');
    renderInline(el('js-fx'), 'C(x)');
    renderInline($('.h-lab', box), '\\Delta x');
    var dec = function (v, n) {
      var s = String(Number(v.toFixed(n)));
      return T.decimal === ',' ? s.replace('.', ',') : s;
    };
    var tex = function (v, n) { return (v < 0 ? '-' : '') + dec(Math.abs(v), n).replace(',', '{,}'); };
    var setLine = function (ln, m, x0, y0) {
      ln.setAttribute('x1', r1(X(XMIN))); ln.setAttribute('y1', r1(Y(y0 + m * (XMIN - x0))));
      ln.setAttribute('x2', r1(X(XMAX))); ln.setAttribute('y2', r1(Y(y0 + m * (XMAX - x0))));
    };
    var place = function (t, x, y) { t.setAttribute('x', r1(x)); t.setAttribute('y', r1(y)); };
    setLine(tan, D0, X0, Y0);
    el('js-tanv').innerHTML = esc(T.tanSlope) + ': <span class="js-tanm"></span>';
    renderInline(el('js-tanm'), "C'(1000) = " + tex(D0, 1));

    function draw() {
      var h = Math.round(parseFloat(hIn.value));
      hOut.textContent = String(h);
      var show = h !== 0;
      [sec, dx, dy, dxl, dyl, b, bl].forEach(function (e) { e.style.display = show ? '' : 'none'; });
      if (!show) {
        el('js-sec').innerHTML = '<span class="js-secm"></span>';
        renderInline(el('js-secm'), '\\Delta x = 0');
        note.textContent = T.derivZero;
        note.style.display = '';
        return;
      }
      var xb = X0 + h, yb = f(xb), d = yb - Y0, m = d / h;
      setLine(sec, m, X0, Y0);
      dx.setAttribute('x1', r1(X(X0))); dx.setAttribute('y1', r1(Y(Y0))); dx.setAttribute('x2', r1(X(xb))); dx.setAttribute('y2', r1(Y(Y0)));
      dy.setAttribute('x1', r1(X(xb))); dy.setAttribute('y1', r1(Y(Y0))); dy.setAttribute('x2', r1(X(xb))); dy.setAttribute('y2', r1(Y(yb)));
      b.setAttribute('cx', r1(X(xb))); b.setAttribute('cy', r1(Y(yb)));
      if (h * SX >= 30) place(bl, X(xb) - 17, Y(yb) - 9); else place(bl, X(xb) + 8, Y(yb) + 5);
      place(dxl, (X(X0) + X(xb)) / 2, Y(Y0) + 17);
      place(dyl, X(xb) + 6, Y(Y0 + d / 3) + 5);
      dxl.style.display = h * SX >= 34 ? '' : 'none';
      dyl.style.display = d * SY >= 30 ? '' : 'none';
      el('js-sec').innerHTML = '<span class="tryit-lab">' + esc(T.secSlope) + ':</span> <span class="js-secm"></span>';
      renderInline(el('js-secm'), '\\frac{\\Delta y}{\\Delta x} = \\frac{' + tex(d, 2) + '}{' + h + '} = ' + tex(m, 4));
      note.textContent = '';
      note.style.display = 'none';
    }
    hIn.addEventListener('input', draw);
    draw();
  }

  /* ------------------------------------------------------------------
     8c. IŠVESTINĖS ŽENKLŲ SCHEMA (sign-chart)
     <div data-widget="sign-chart" data-spec='{...}'></div>
     spec: fp, f – eilučių užrašai (TeX), v – kintamasis (TeX);
           pts: [{x: "4", z: true – išvestinė lygi 0, o: true – neleistina reikšmė (tuščias taškas)}];
           s: išvestinės ženklai kiekviename intervale ("+" arba "-");
           pts[i].t – taško tipas po tašku funkcijos eilutėje (pvz., "max", "min");
           outL / outR: true (numatyta) – kairėje / dešinėje nuo kraštinio taško
           reikšmės nepriklauso apibrėžimo sričiai (pilka sritis); false – sritis tęsiasi iki ∓∞.
     Taškai išdėstomi schemiškai (vienodais tarpais), kaip ženklų schemose.
     ------------------------------------------------------------------ */
  function initSignChart(box) {
    var spec;
    try { spec = JSON.parse(box.getAttribute('data-spec')); } catch (e) { return; }
    var pts = spec.pts || [];
    var outL = spec.outL !== false, outR = spec.outR !== false;
    var nb = pts.length + (outL ? 0 : 1) + (outR ? 0 : 1);
    var a = outL ? 14 : 0, b = outR ? 84 : 96;
    var pos = [];
    for (var i = 0; i < nb; i++) pos.push(nb > 1 ? a + (b - a) * i / (nb - 1) : (a + b) / 2);
    var off = outL ? 0 : 1;
    var html = '';
    if (outL) html += '<span class="sc-out" style="left:0;width:' + pos[0] + '%"></span>';
    if (outR) html += '<span class="sc-out" style="left:' + pos[nb - 1] + '%;right:-20px"></span>';
    html += '<span class="sc-axis"></span><span class="sc-var">\\(' + spec.v + '\\)</span>';
    pts.forEach(function (p, k) {
      var x = pos[k + off];
      html += '<span class="sc-guide" style="left:' + x + '%"></span>' +
        '<span class="sc-dot' + (p.o ? ' open' : '') + '" style="left:' + x + '%"></span>' +
        '<span class="sc-tick" style="left:' + x + '%">\\(' + p.x + '\\)</span>' +
        (p.z ? '<span class="sc-zero" style="left:' + x + '%">\\(0\\)</span>' : '') +
        (p.t ? '<span class="sc-type" style="left:' + x + '%">' + esc(p.t) + '</span>' : '');
    });
    var signs = spec.s || [], words = [];
    for (var k = 0; k < nb - 1; k++) {
      var c = (pos[k] + pos[k + 1]) / 2, up = signs[k] === '+';
      html += '<span class="sc-sign" style="left:' + c + '%">\\(' + (up ? '+' : '-') + '\\)</span>' +
        '<span class="sc-arr ' + (up ? 'up' : 'down') + '" style="left:' + c + '%"><svg viewBox="0 0 24 24" aria-hidden="true">' +
        (up ? '<path d="M5 19L19 5M10 5h9v9"/>' : '<path d="M5 5l14 14M19 10v9h-9"/>') + '</svg></span>';
      words.push(up ? T.incr : T.decr);
    }
    box.innerHTML = '<div class="signchart" role="img" aria-label="' + esc(spec.aria || (T.signAria + ': ' + words.join(', '))) + '">' +
      '<div class="sc-lab sc-top">\\(' + spec.fp + '\\)</div>' +
      '<div class="sc-lab sc-bot">\\(' + spec.f + '\\)</div>' +
      '<div class="sc-track">' + html + '</div></div>';
  }

  /* ------------------------------------------------------------------
     8d. SKAIČIŲ TIESĖ (number-line)
     <div data-widget="number-line" data-spec='{...}'></div>
     spec: min, max – rodoma tiesės dalis (taškai išdėstomi pagal mastelį);
           ticks – padalos su užrašais: skaičiai arba {"x": 2, "lab": "TeX"};
           rows – viena ar kelios tiesės, kiekviena:
             lab – užrašas kairėje (TeX, neprivalomas),
             segs – intervalai [{a, b, ai, bi}]: a, b – galai (null – begalybė, piešiama rodyklė),
                    ai, bi – ar galas įtrauktas (true – pilnas taškas, false – tuščias),
             pts – atskiri taškai [{x, o: true – tuščias taškas}];
           v – kintamojo raidė prie ašies rodyklės (TeX, neprivaloma; eilutėje galima nurodyti savo v);
           aria – aprašas ekrano skaitytuvams.
     Ašies rodyklė – tik dešinėje (skaičių didėjimo kryptimi).
     Intervalų spalva – CSS kintamasis --nl (numatyta --chart-2, mėlyna).
     ------------------------------------------------------------------ */
  function initNumberLine(box) {
    var spec;
    try { spec = JSON.parse(box.getAttribute('data-spec')); } catch (e) { return; }
    var min = spec.min, max = spec.max;
    var P = function (x) { return +((x - min) / (max - min) * 100).toFixed(2); };
    var num = function (v) { var s = String(v); return T.decimal === ',' ? s.replace('.', '{,}') : s; };
    var ticks = (spec.ticks || []).map(function (t) { return typeof t === 'object' ? t : { x: t, lab: num(t) }; });
    var rows = spec.rows || [];
    var hasLab = rows.some(function (r) { return r.lab; });
    var html = '';
    rows.forEach(function (r) {
      var v = r.v || spec.v;
      var t = '<span class="nl-axis"></span>' + (v ? '<span class="nl-var">\\(' + v + '\\)</span>' : '');
      ticks.forEach(function (k) {
        t += '<span class="nl-tick" style="left:' + P(k.x) + '%"></span>' +
          '<span class="nl-tl" style="left:' + P(k.x) + '%">\\(' + k.lab + '\\)</span>';
      });
      var dots = '';
      (r.segs || []).forEach(function (s) {
        var a = s.a == null ? 0 : P(s.a), b = s.b == null ? 100 : P(s.b);
        t += '<span class="nl-seg' + (s.a == null ? ' to-l' : '') + (s.b == null ? ' to-r' : '') +
          '" style="left:' + a + '%;width:' + (b - a) + '%"></span>';
        if (s.a != null) dots += '<span class="nl-pt' + (s.ai ? '' : ' open') + '" style="left:' + a + '%"></span>';
        if (s.b != null && s.b !== s.a) dots += '<span class="nl-pt' + (s.bi ? '' : ' open') + '" style="left:' + b + '%"></span>';
      });
      (r.pts || []).forEach(function (p) {
        dots += '<span class="nl-pt' + (p.o ? ' open' : '') + '" style="left:' + P(p.x) + '%"></span>';
      });
      html += (hasLab ? '<div class="nl-lab">' + (r.lab ? '\\(' + r.lab + '\\)' : '') + '</div>' : '') +
        '<div class="nl-track">' + t + dots + '</div>';
    });
    box.innerHTML = '<div class="nline' + (hasLab ? ' nline--lab' : '') + '" role="img" aria-label="' + esc(spec.aria || '') + '">' + html + '</div>';
  }

  /* ------------------------------------------------------------------
     9. FORMULĖS (KaTeX)
     Eilutėje: \( ... \)    Atskiroje eilutėje: \[ ... \]
     ------------------------------------------------------------------ */
  function renderMath(root) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(root, {
      delimiters: [
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false,
      trust: function (c) { return c.command === '\\htmlClass'; },
      strict: function (code) { return code === 'htmlExtension' ? 'ignore' : 'warn'; },
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option', 'svg']
    });
  }
  function renderInline(el, tex) {
    if (window.katex) window.katex.render(tex, el, { throwOnError: false });
    else el.textContent = tex;
  }


  /* ------------------------------------------------------------------
     TIESINIO PROGRAMAVIMO BRĖŽINYS (lp-chart)
     <div data-widget="lp-chart" data-spec='{...}'></div>
     spec: x/y: [min, max, padala, užrašai kas k padalų];
           c: apribojimai {a, b, s: "le"|"ge", r, lab, col: 1–5, lt: užrašo vieta 0–1,
              arr: rodyklių vietos [0–1], lo: užrašo poslinkis px};
           nn: "xy" | "x" | "y" – neneigiamumo sąlygos (tik aibei);
           shade: true – nuspalvinti visų apribojimų sankirtą;
           pts: [{x, y, lab, p: n|ne|e|se|s|sw|w|nw, hi: true}];
           maxh – didžiausias brėžinio aukštis (numatytasis 330);
           free: true – ašių masteliai skirtingi (brėžinys užpildo visą plotą);
           rot: true – tiesės užrašas pasukamas lygiagrečiai tiesei (lt – vieta, lo – atstumas);
           test: [x, y] – tikrinimo taškas; aria: aprašas;
           ann: true – privalomų grafiko elementų žymos 1–5 (ašių pavadinimai, koordinačių pradžia,
              vienetinė atkarpa, tiesės pavadinimas, leistina aibė); vietas galima nurodyti
              duomenų koordinatėmis: ann: {ax: [[x, y], [x, y]], o: [x, y], u: [x, y], lab: [x, y], set: [x, y]}.
     ------------------------------------------------------------------ */
  function initLpChart(box) {
    var sp;
    try { sp = JSON.parse(box.getAttribute('data-spec')); } catch (e) { return; }
    var xr = sp.x, yr = sp.y, W = 340, Lp = 30, Rp = 22, Tp = 22, Bp = 26, MAXH = sp.maxh || 330;
    var s = Math.min((W - Lp - Rp) / (xr[1] - xr[0]), (MAXH - Tp - Bp) / (yr[1] - yr[0]));
    var sx = s, sy = s;
    if (sp.free) { sx = (W - Lp - Rp) / (xr[1] - xr[0]); sy = (MAXH - Tp - Bp) / (yr[1] - yr[0]); }
    var pw = sx * (xr[1] - xr[0]), ph = sy * (yr[1] - yr[0]);
    var x0 = Lp + ((W - Lp - Rp) - pw) / 2, H = Math.round(Tp + ph + Bp);
    function X(x) { return +(x0 + (x - xr[0]) * sx).toFixed(1); }
    function Y(y) { return +(Tp + (yr[1] - y) * sy).toFixed(1); }
    var cons = sp.c || [];

    // pusplokštumė a*x + b*y <= r
    function hp(c) { return c.s === 'ge' ? { a: -c.a, b: -c.b, r: -c.r } : { a: c.a, b: c.b, r: c.r }; }
    function clip(poly, h) {
      var out = [];
      for (var i = 0; i < poly.length; i++) {
        var P = poly[i], Q = poly[(i + 1) % poly.length];
        var fp = h.a * P[0] + h.b * P[1] - h.r, fq = h.a * Q[0] + h.b * Q[1] - h.r;
        if (fp <= 1e-9) out.push(P);
        if ((fp < -1e-9 && fq > 1e-9) || (fp > 1e-9 && fq < -1e-9)) {
          var t = fp / (fp - fq);
          out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]);
        }
      }
      return out;
    }
    var rect = [[xr[0], yr[0]], [xr[1], yr[0]], [xr[1], yr[1]], [xr[0], yr[1]]];
    // tiesės atkarpa lango ribose
    function seg(c) {
      var pts = [], E = 1e-9;
      if (Math.abs(c.b) > E) [xr[0], xr[1]].forEach(function (x) { var y = (c.r - c.a * x) / c.b; if (y >= yr[0] - E && y <= yr[1] + E) pts.push([x, y]); });
      if (Math.abs(c.a) > E) [yr[0], yr[1]].forEach(function (y) { var x = (c.r - c.b * y) / c.a; if (x >= xr[0] - E && x <= xr[1] + E) pts.push([x, y]); });
      pts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
      return pts.length >= 2 ? [pts[0], pts[pts.length - 1]] : null;
    }
    function eq(str) {
      return esc(str).replace(/([a-z])/g, '<tspan class="i">$1</tspan>');
    }

    var g = '';
    // tinklelis
    var tx = xr[2] || 1, ty = yr[2] || 1, lx = xr[3] || 1, ly = yr[3] || 1;
    var i0 = Math.ceil(xr[0] / tx - 1e-9), i1 = Math.floor(xr[1] / tx + 1e-9);
    var j0 = Math.ceil(yr[0] / ty - 1e-9), j1 = Math.floor(yr[1] / ty + 1e-9);
    for (var i = i0; i <= i1; i++) g += '<line class="grid" x1="' + X(i * tx) + '" y1="' + Y(yr[0]) + '" x2="' + X(i * tx) + '" y2="' + Y(yr[1]) + '"/>';
    for (var j = j0; j <= j1; j++) g += '<line class="grid" x1="' + X(xr[0]) + '" y1="' + Y(j * ty) + '" x2="' + X(xr[1]) + '" y2="' + Y(j * ty) + '"/>';

    // leistinųjų sprendinių aibė
    var regionPoly = null, labPos = [];
    if (sp.shade !== false) {
      var poly = rect.slice();
      var all = cons.map(hp);
      if ((sp.nn || '').indexOf('x') >= 0) all.push({ a: -1, b: 0, r: 0 });
      if ((sp.nn || '').indexOf('y') >= 0) all.push({ a: 0, b: -1, r: 0 });
      all.forEach(function (h) { if (poly.length) poly = clip(poly, h); });
      regionPoly = poly;
      if (poly.length > 2) g += '<path class="lp-region" d="M' + poly.map(function (p) { return X(p[0]) + ' ' + Y(p[1]); }).join('L') + 'Z"/>';
    }

    // ašys
    var ax0 = Math.min(Math.max(0, xr[0]), xr[1]), ay0 = Math.min(Math.max(0, yr[0]), yr[1]);
    var xe = X(xr[1]) + 12, yt = Y(yr[1]) - 12;
    g += '<line class="ax" x1="' + X(xr[0]) + '" y1="' + Y(ay0) + '" x2="' + xe + '" y2="' + Y(ay0) + '"/>' +
         '<path class="ah" d="M' + (xe + 7) + ' ' + Y(ay0) + 'l-9 -4.5v9z"/>' +
         '<line class="ax" x1="' + X(ax0) + '" y1="' + Y(yr[0]) + '" x2="' + X(ax0) + '" y2="' + yt + '"/>' +
         '<path class="ah" d="M' + X(ax0) + ' ' + (yt - 7) + 'l-4.5 9h9z"/>' +
         '<text class="m" x="' + (xe + 2) + '" y="' + (Y(ay0) + 17) + '" text-anchor="middle">x</text>' +
         '<text class="m" x="' + (X(ax0) - 11) + '" y="' + (yt - 1) + '" text-anchor="middle">y</text>';
    // padalos ir skaičiai (vienetinė atkarpa)
    for (i = i0; i <= i1; i++) {
      if (i === 0) continue;
      var vx = clean(i * tx);
      g += '<line class="ax" x1="' + X(vx) + '" y1="' + (Y(ay0) - 3) + '" x2="' + X(vx) + '" y2="' + (Y(ay0) + 3) + '"/>';
      if (i % lx === 0 && !(i === -1 && lx === 1)) g += '<text class="lp-tick halo" x="' + X(vx) + '" y="' + (Y(ay0) + 14) + '" text-anchor="middle">' + decStr(vx) + '</text>';
    }
    for (j = j0; j <= j1; j++) {
      if (j === 0) continue;
      var vy = clean(j * ty);
      g += '<line class="ax" x1="' + (X(ax0) - 3) + '" y1="' + Y(vy) + '" x2="' + (X(ax0) + 3) + '" y2="' + Y(vy) + '"/>';
      if (j % ly === 0 && !(j === -1 && ly === 1)) g += '<text class="lp-tick halo" x="' + (X(ax0) - 6) + '" y="' + (Y(vy) + 3.5) + '" text-anchor="end">' + decStr(vy) + '</text>';
    }
    g += '<text class="m halo" x="' + (X(ax0) - 7) + '" y="' + (Y(ay0) + 15) + '" text-anchor="end">O</text>';

    // tiesės, rodyklės ir jų lygtys
    cons.forEach(function (c) {
      var sg = seg(c);
      if (!sg) return;
      var k = c.col || 1;
      g += '<line class="lp-l' + k + '" x1="' + X(sg[0][0]) + '" y1="' + Y(sg[0][1]) + '" x2="' + X(sg[1][0]) + '" y2="' + Y(sg[1][1]) + '"/>';
      var n = c.s === 'ge' ? [c.a, c.b] : [-c.a, -c.b];
      n = [n[0] / sx, n[1] / sy]; // statmuo ekrano koordinatėse (kai ašių masteliai skiriasi)
      var nl = Math.sqrt(n[0] * n[0] + n[1] * n[1]), ux = n[0] / nl, uy = -n[1] / nl; // svg kryptis
      (c.arr || [0.22, 0.7]).forEach(function (t) {
        var px = X(sg[0][0] + t * (sg[1][0] - sg[0][0])), py = Y(sg[0][1] + t * (sg[1][1] - sg[0][1]));
        var qx = px + 15 * ux, qy = py + 15 * uy;
        var hx = qx + 5 * ux, hy = qy + 5 * uy, wx = -uy * 4, wy = ux * 4;
        g += '<line class="lp-a' + k + '" x1="' + px + '" y1="' + py + '" x2="' + qx.toFixed(1) + '" y2="' + qy.toFixed(1) + '"/>' +
             '<path class="lp-h' + k + '" d="M' + hx.toFixed(1) + ' ' + hy.toFixed(1) + 'L' + (qx + wx).toFixed(1) + ' ' + (qy + wy).toFixed(1) + 'L' + (qx - wx).toFixed(1) + ' ' + (qy - wy).toFixed(1) + 'Z"/>';
      });
      if (c.lab) {
        var t = c.lt == null ? 0.88 : c.lt, off = c.lo == null ? 12 : c.lo;
        var lxp = X(sg[0][0] + t * (sg[1][0] - sg[0][0])) - off * ux, lyp = Y(sg[0][1] + t * (sg[1][1] - sg[0][1])) - off * uy;
        if (c.rot) {
          // užrašas lygiagretus tiesei
          var ang = Math.atan2(Y(sg[1][1]) - Y(sg[0][1]), X(sg[1][0]) - X(sg[0][0])) * 180 / Math.PI;
          if (ang > 90) ang -= 180;
          if (ang <= -90) ang += 180;
          labPos.push({ x: lxp - 16 * (off >= 0 ? ux : -ux), y: lyp - 16 * (off >= 0 ? uy : -uy) });
          g += '<text class="lp-lab c' + k + ' halo" x="' + lxp.toFixed(1) + '" y="' + lyp.toFixed(1) + '" dy="0.35em" text-anchor="middle" transform="rotate(' + ang.toFixed(1) + ' ' + lxp.toFixed(1) + ' ' + lyp.toFixed(1) + ')">' + eq(c.lab) + '</text>';
          return;
        }
        var dir = off >= 0 ? -ux : ux;
        var anc = c.la || (Math.abs(dir) < 0.3 ? 'middle' : (dir > 0 ? 'start' : 'end'));
        var wEst = c.lab.length * 7.4;
        if (anc === 'start' && lxp + wEst > W - 2) { anc = 'end'; lxp = Math.min(lxp, W - 3); }
        if (anc === 'end' && lxp - wEst < 2) { anc = 'start'; lxp = Math.max(lxp, 3); }
        if (anc === 'middle') lxp = Math.min(Math.max(lxp, wEst / 2 + 2), W - wEst / 2 - 2);
        labPos.push({ x: anc === 'start' ? lxp - 11 : (anc === 'end' ? lxp + 11 : lxp), y: anc === 'middle' ? lyp - 12 : lyp });
        g += '<text class="lp-lab c' + k + ' halo" x="' + lxp.toFixed(1) + '" y="' + (lyp + 4).toFixed(1) + '" text-anchor="' + anc + '">' + eq(c.lab) + '</text>';
      }
    });

    // tikrinimo taškas
    if (sp.test) g += '<circle class="lp-test" cx="' + X(sp.test[0]) + '" cy="' + Y(sp.test[1]) + '" r="4.5"/>';

    // viršūnės
    var OFF = { n: [0, -9, 'middle'], ne: [7, -7, 'start'], e: [9, 4, 'start'], se: [7, 15, 'start'], s: [0, 17, 'middle'], sw: [-7, 15, 'end'], w: [-9, 4, 'end'], nw: [-7, -7, 'end'] };
    (sp.pts || []).forEach(function (p) {
      var o = OFF[p.p || 'ne'];
      g += '<circle class="' + (p.hi ? 'pt-hi' : 'pt') + '" cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="' + (p.hi ? 5 : 4) + '"/>';
      if (p.lab) g += '<text class="lp-pt halo" x="' + (X(p.x) + o[0]) + '" y="' + (Y(p.y) + o[1]) + '" text-anchor="' + o[2] + '">' + esc(p.lab) + '</text>';
    });

    // privalomų grafiko elementų žymos
    if (sp.ann) {
      var an = sp.ann === true ? {} : sp.ann;
      var bdg = function (n, x, y) {
        return '<g class="badge"><circle cx="' + (+x).toFixed(1) + '" cy="' + (+y).toFixed(1) + '" r="7.5"/><text x="' + (+x).toFixed(1) + '" y="' + (+y + 3.6).toFixed(1) + '" text-anchor="middle">' + n + '</text></g>';
      };
      var at = function (d) { return [X(d[0]), Y(d[1])]; };
      g += '<line class="leg" style="stroke-width:3.5" x1="' + X(ax0) + '" y1="' + Y(ay0) + '" x2="' + X(ax0 + tx) + '" y2="' + Y(ay0) + '"/>' +
           '<line class="leg" style="stroke-width:3.5" x1="' + X(ax0) + '" y1="' + Y(ay0) + '" x2="' + X(ax0) + '" y2="' + Y(ay0 + ty) + '"/>';
      var axp = an.ax ? an.ax.map(at) : [[xe - 3, Y(ay0) - 13], [X(ax0) - 26, yt - 3]];
      var op = an.o ? at(an.o) : [X(ax0) - 27, Y(ay0) + 11];
      var upx = an.u ? at(an.u) : [(X(ax0) + X(ax0 + tx)) / 2, Y(ay0) + 11];
      var lp = an.lab ? at(an.lab) : (labPos[0] ? [labPos[0].x, labPos[0].y] : null);
      var stp = null;
      if (an.set) stp = at(an.set);
      else if (regionPoly && regionPoly.length > 2) {
        var cx = 0, cy = 0;
        regionPoly.forEach(function (q) { cx += q[0]; cy += q[1]; });
        stp = at([cx / regionPoly.length, cy / regionPoly.length]);
      }
      g += bdg(1, axp[0][0], axp[0][1]) + bdg(1, axp[1][0], axp[1][1]) + bdg(2, op[0], op[1]) + bdg(3, upx[0], upx[1]) +
           (lp ? bdg(4, lp[0], lp[1]) : '') + (stp ? bdg(5, stp[0], stp[1]) : '');
    }

    box.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(sp.aria || '') + '">' + g + '</svg>';
  }

  /* ------------------------------------------------------------------
     Nuorodos į puslapius, kurių šia kalba dar nėra.
     Turinio nuoroda į to paties aplanko failą (pvz., „tema-2-...html#pavyzdys-1“),
     kurio PAGES įraše href[LANG] dar tuščias, nukreipiama į kitos kalbos puslapį,
     o po nuorodos tekstu pridedamas prierašas (T.inOther). Kai puslapis sukuriamas
     ir jo vardas įrašomas į PAGES, nuoroda ima vesti į jį automatiškai.
     ------------------------------------------------------------------ */
  function resolveLinks() {
    var byFile = {};
    Object.keys(PAGES).forEach(function (k) {
      var h = PAGES[k].href || {};
      if (h.lt) byFile[h.lt] = h;
      if (h.en) byFile[h.en] = h;
    });
    $all('main a[href]').forEach(function (a) {
      var raw = a.getAttribute('href');
      var m = /^([a-z0-9-]+\.html)(#.*)?$/i.exec(raw || '');
      if (!m) return;
      var h = byFile[m[1]];
      if (!h || h[LANG]) return;
      var target = h[OTHER];
      if (!target) return;
      a.setAttribute('href', '../' + OTHER + '/' + target + (m[2] || ''));
      a.setAttribute('hreflang', OTHER);
      var note = document.createElement('span');
      note.className = 'lang-note';
      note.textContent = ' ' + T.inOther;
      var txt = a.lastChild;
      if (txt && txt.nodeType === 3 && /\s*→\s*$/.test(txt.nodeValue)) {
        txt.nodeValue = txt.nodeValue.replace(/\s*→\s*$/, '');
        a.appendChild(note);
        a.appendChild(document.createTextNode(' →'));
      } else {
        a.appendChild(note);
      }
    });
  }

  /* ------------------------------------------------------------------
     Paleidimas
     ------------------------------------------------------------------ */
  function init() {
    buildHeader();
    buildCrumbs();
    buildFooter();
    buildCoursePath();
    buildModelGrid();
    buildPager();
    fillI18n();
    resolveLinks();
    $all('[data-widget="market-chart"]').forEach(initMarketChart);
    $all('[data-widget="breakeven-chart"]').forEach(initBreakEvenChart);
    $all('[data-widget="means-chart"]').forEach(initMeansChart);
    $all('[data-widget="lp-chart"]').forEach(initLpChart);
    $all('[data-widget="sign-chart"]').forEach(initSignChart);
    $all('[data-widget="number-line"]').forEach(initNumberLine);
    renderMath(document.body);
    $all('.example').forEach(initExample);
    $all('.quiz').forEach(function (qz) {
      var numbering = qz.getAttribute('data-numbering');
      $all('.q', qz).forEach(function (q, i) { initQuestion(q, i, numbering); });
    });
    $all('[data-widget="line-explorer"]').forEach(initLineExplorer);
    $all('[data-widget="deriv-explorer"]').forEach(initDerivExplorer);
    initTerms();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
