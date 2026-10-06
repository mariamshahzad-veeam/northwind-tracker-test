/* static first-party cookies set by the site's own script (initiator: assets/cookies.js) */
(function () {
  var year = 'max-age=31536000; path=/; SameSite=Lax';
  var jar = {
    nw_theme: 'light',
    nw_lang: 'en-US',
    nw_cart_hint: 'empty',
    _ga: 'GA1.1.1471893265.1759700000',
    _gid: 'GA1.1.902417361.1759700000',
    _hjSessionUser_3141592: 'eyJpZCI6Ik5XLVFBLTAwMSJ9'
  };
  Object.keys(jar).forEach(function (k) { document.cookie = k + '=' + jar[k] + '; ' + year; });
})();
