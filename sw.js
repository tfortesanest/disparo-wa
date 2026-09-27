// Service worker mínimo — só existe para o navegador considerar o site instalável como PWA.
// Não faz cache agressivo: sempre busca a rede primeiro, para você nunca ficar preso
// numa versão antiga do app (o token do backend não é afetado por isto).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
