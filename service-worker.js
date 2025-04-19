const CACHE_NAME = 'zoom-meme-lord-v1';
const urlsToCache = ['/', '/index.html', '/styles.css', 'https://i.imgur.com/xyz123.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(err => console.error('Fetch error:', err))
  );
});
