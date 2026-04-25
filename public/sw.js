// Force cache clearing service worker
self.addEventListener('install', (event) => {
  // Force new service worker to take control immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clear all caches unconditionally to fix stale content issues
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => self.clients.claim()) // Immediately take control of all clients
  );
});

self.addEventListener('fetch', (event) => {
  // Always fetch from network, completely bypassing strict caching
  event.respondWith(
    fetch(event.request).catch((err) => {
      console.error('Fetch failed:', err);
      throw err;
    })
  );
});
