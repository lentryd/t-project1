importScripts("/precache-manifest.f4c2a8d1ffdb25d89eb5e17d99c7b27c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Обновления и всякое такое
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Кэширование данных
workbox.core.setCacheNameDetails({ prefix: "t-project1" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Офлайн доступ
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("index.html")
);

