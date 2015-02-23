function processHash() {
  var hash = location.hash || '#';

  if (!app.router.run(hash.slice(1))) {
    console.log('sorry');
  }
}

window.addEventListener('hashchange', processHash);
processHash();
