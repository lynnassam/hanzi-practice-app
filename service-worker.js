self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hanzi-app').then(function(cache) {
      return cache.addAll([
        '/',
        '/practice.html',
        '/output/我/7.png',
        '/output/我/1.png',
        // 필요한 이미지들 추가
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
