const CACHE = "cookbook-shell-66545be89f908d2d";
const SHELL = ["./app.js","./chunk-WAST323Y.js","./chunk-RKIYNCH6.js","./index.html","./style.css","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith("cookbook-shell-") && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    if (request.mode === "navigate") return (await cache.match("./index.html")) || fetch(request);
    return (await cache.match(request)) || fetch(request);
  }));
});
