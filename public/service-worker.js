const CACHE_NAME = "image-cache-v1";
const IMAGES_TO_CACHE_URLS = [
  "/jeans.jpg",
  "/shirt.jpg",
  "/shoes.jpg",
  "/beige-shirt.jpg",
  "/white-shoes.jpg",
  "/black-shoes.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(IMAGES_TO_CACHE_URLS);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response;
    })
  );
});
