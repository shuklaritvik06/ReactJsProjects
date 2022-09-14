const CACHE_NAME = "weather-saathi";
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

self.addEventListener('install',(e)=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            return cache.addAll(urlsToCache);
        })
        .then(()=>self.skipWaiting())
    )
});

self.addEventListener('fetch',(e)=>{
    e.respondWith(
        caches.match(e.request)
        .then(()=>{
            return fetch(e.request) ;
        }).catch(()=>{
            return caches.match('offline.html');
        })
    )
});

self.addEventListener('activate',(e)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    e.waitUntil(caches.keys().then((cacheNames)=>{
        return Promise.all(
            cacheNames.map((cacheName)=>{
                if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName);
                }
            })
        )
    })) 
});