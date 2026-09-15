const CACHE_NAME = 'sanaa-map-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet-search@3.0.2/dist/leaflet-search.min.css',
    'https://unpkg.com/leaflet-search@3.0.2/dist/leaflet-search.min.min.js',
    '2.json',
    '3a.json',
    '3b.json',
    '4.json',
    '5f.json',
    '6.json',
    '7.json'
];

// حفظ الملفات في الكاش عند التثبيت
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// قراءة البيانات من ذاكرة الكاش بدلاً من النت
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request);
        })
    );
});
