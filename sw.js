// Service Worker - 自動更新版本
const CACHE_VERSION = 'v1';

self.addEventListener('install', (event) => {
  console.log('✅ Service Worker 安裝中...');
  self.skipWaiting(); // 立即啟用新版本
});

self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker 已啟用');
  event.waitUntil(clients.claim()); // 立即控制所有頁面
});

self.addEventListener('fetch', (event) => {
  // 直接從網路取得，不使用快取（確保總是最新版本）
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('離線中', { status: 503 });
    })
  );
});
