/* Booking page: duration picker, live price, Cal.com embed.
   Reads BOOKING_LINK / HOURLY_RATE_USD / DURATIONS_MIN from config.js. */
(function () {
  var form = document.getElementById('picker');
  if (!form) return;
  var $ = function (id) { return document.getElementById(id); };
  var fmt = function (n) { return '$' + (Number.isInteger(n) ? n.toFixed(0) : n.toFixed(2)); };
  var priceFor = function (min) { return (min / 60) * HOURLY_RATE_USD; };

  var params = new URLSearchParams(location.search);
  var services = {
    quran: 'Quran Classes', tafseer: 'Tafseer Classes', hadith: 'Hadith Classes', fiqh: 'Fiqh Classes',
    masail: 'Daily Life Masail Consultation', assignment: 'Assignment Consultation',
    arabic: 'Arabic Language Foundations', seerah: 'Seerah Study Circle', consultation: 'General Consultation'
  };
  var topic = services[params.get('service')] || '';
  if (topic) { $('sum-topic-row').hidden = false; $('sum-topic').textContent = topic; }

  var linkReady = typeof BOOKING_LINK === 'string' && BOOKING_LINK && BOOKING_LINK.indexOf('PASTE_') !== 0;
  var base = '';
  if (linkReady) base = /^https?:\/\//i.test(BOOKING_LINK) ? BOOKING_LINK : 'https://cal.com/' + BOOKING_LINK.replace(/^\/+/, '');

  var current = 0;
  function render() {
    var checked = form.querySelector('input[name="duration"]:checked');
    var min = parseInt(checked.value, 10);
    if (DURATIONS_MIN.indexOf(min) < 0 || min > 60) return;
    $('sum-duration').textContent = min + ' minutes';
    $('sum-price').textContent = fmt(priceFor(min));
    $('sum-price').setAttribute('data-price', priceFor(min));
    if (linkReady && min !== current) {
      var u = new URL(base);
      u.searchParams.set('duration', String(min));
      u.searchParams.set('layout', 'month_view');
      u.searchParams.set('theme', 'light');
      if (topic) u.searchParams.set('notes', 'Topic: ' + topic);
      $('cal-frame').src = u.toString();
      $('cal-open').href = u.toString();
    }
    current = min;
  }

  Array.prototype.forEach.call(DURATIONS_MIN, function (m) {
    var el = form.querySelector('input[value="' + m + '"]');
    if (el) form.querySelector('label[for="' + el.id + '"] .p').textContent = fmt(priceFor(m));
  });
  form.addEventListener('change', render);
  $('embed').hidden = !linkReady;
  $('embed-pending').hidden = linkReady;
  $('cal-open').hidden = !linkReady;
  render();
})();
