const CACHE = "cookbook-shell-2cf1e19605615bd7";
const SHELL = ["./app.js","./chunk-3NNGLKLG.js","./chunk-WIN5SRLP.js","./index.html","./style.css","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png"];
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
