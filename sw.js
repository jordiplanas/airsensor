const CACHE = 'airsensor-v2';
const ASSETS = [
  '/airsensor/',
  '/airsensor/index.html',
  '/airsensor/manifest.json',
  '/airsensor/icons/icon-192.png',
  '/airsensor/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('thingspeak.com')) {
    e.respondWith(fetch(e.request).catch(() =>
      new Response('{"error":"offline"}', { headers: { 'Content-Type': 'application/json' } })
    ));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
