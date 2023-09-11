self.addEventListener('install', (e) => {
  const cacheKey = 'MyCache_V1';

  e.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.add('./cat.jpg');
    })
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  if (url.origin === location.origin && url.pathname.includes('/dog.jpg')) {
    console.log('No doggo for you :(');
    e.respondWith(caches.match('./cat.jpg'));
  }
});
