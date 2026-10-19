// IPPS - service worker. Rede primeiro: o site actualizado aparece sempre que há internet;
// sem internet, abre a última versão guardada.
const V = 'ipps-v2';
const CORE = ['./', 'index.html', 'privacidade.html', 'termos.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(
      fetch(r)
        .then(res => {
          const a = res.clone(), b = res.clone();
          caches.open(V).then(c => {
            c.put(r, a);
            if (u.pathname === '/' || u.pathname.endsWith('/index.html')) c.put('index.html', b);
          });
          return res;
        })
        .catch(() => caches.match(r).then(x => x || caches.match('index.html')))
    );
    return;
  }
  e.respondWith(
    fetch(r)
      .then(res => { if (res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; })
      .catch(() => caches.match(r))
  );
});
