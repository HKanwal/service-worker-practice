self.addEventListener('install', (e) => {
  const cacheKey = 'MyCache_V1';

  e.waitUntil(
    caches.open(cacheKey).then((cache) => {
      console.log('SW: installing...');
      return;
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      console.log('SW: activating...');
    })
  );
});
