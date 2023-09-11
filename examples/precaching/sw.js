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

  console.log('doggo??', url.pathname);

  if (url.origin === location.origin && url.pathname === './dog.jpg') {
    console.log('no dog for you');
    e.respondWith(caches.match('./cat.jpg'));
  }
});
