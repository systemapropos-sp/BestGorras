const CACHE_NAME='best-gorras-v1';
const ASSETS=['/','/index.html','/icon-192.png','/icon-512.png','/manifest.json','/hero-cap.jpg','/custom-print.jpg','/cap1.png','/cap2.png','/cap3.png','/cap4.png','/hoodie1.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE_NAME).map(n=>caches.delete(n)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
