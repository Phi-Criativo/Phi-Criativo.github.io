'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3e5fb1bd4a39def36cdcfb512283b8aa",
".git/config": "e277abdd56351b666fdd364d59f29964",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "96b77d312f60a89a5491b7b8db41c1ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d03d81a3379c350960e8290ffdd0777f",
".git/logs/refs/heads/main": "5de6eaab4bbdf02cd74b430a149f4dac",
".git/logs/refs/remotes/origin/main": "0413760ea0bdd1cef8e1bef8b442fdc7",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/0b/54d15df100ae9d88fd84ea3ba1adcaa268821f": "a8b8829702c4b0ccc81fc7757cc87c1b",
".git/objects/0b/c58f2542454149a40f63647775e9104fcac712": "7e7ed9e1ea367f9045de2cda85ce856b",
".git/objects/12/4263ae2dcf622be0ea1b60330edcdf65596c81": "44aab2dbb0c37d3ea3d7be5b5743211e",
".git/objects/18/8362a2933cdeb4bc04a734c6d73bf4d4664e79": "5db8862540521af9131aee35aec491d5",
".git/objects/19/4c08aedefb51736fafce759a80fcec69de2c29": "638a606bed83f6ac7e8ca43cd57162c9",
".git/objects/1a/543a5da1484289d7b28e5915591cdb22f5f874": "0f43d470d69332f5e8c9da6301a5f7fa",
".git/objects/1d/70df62a5df1d0baaea5c0524710f49d71c4c1b": "ac68df5ee64e7dda9ef995009d3494f8",
".git/objects/22/d891c15e17fbcad8c77d813b60a9492a18d406": "4130eb95e49661a656cb8177b347172a",
".git/objects/23/e8e0615bb8b533413e105c05a154d30b1a833f": "1e92fc0059cfc5246e7cc67ff720f92a",
".git/objects/2d/3e804b020dbf3eb9e1fe1137f9d50b535dcfb0": "0df3e32f1f413a01bc039aafb8afe4ab",
".git/objects/31/aa2092fce0369507e64661b2d8bdc950094c16": "156b10da87573c3b2da4023508ae4180",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/41/e126e1d52f5f5c38d9db4669a0a8a1469b7af5": "b0bb1a5555603dca3812b9fb55cb4932",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/4cd454f61ef682cfdaa889b58264a3117fdc35": "34fc9cc118346e118d6cdf454aa380eb",
".git/objects/52/e3eb33ee111ae691a04af0bd8c886f7fb09388": "a111c60eb1d4f3482e0ea70b4ebad23c",
".git/objects/5e/7cddbdf8869d1bbcc88ab95cc657784103a91c": "573cb4207ef3706358f1fcffc1cbf5f1",
".git/objects/60/18251de4aa88f2e80abc2eda18882562702a8f": "03c98b956b21cccb89f52b1cfdaa0ddc",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b756122b83417a6cbda2eb48b49ac78c6f9ed8": "c659da14125dccc6eb93024873b99ca7",
".git/objects/6b/1980c96ef877c0e48c4728aef43ca0666ab5a6": "e27194ca44f662921736160c1aef4025",
".git/objects/6f/28b13abf9a3a14c6cdbbf8cb50e84ee7050fb3": "c08f416d2f31b4cc342e4a5f624bdcea",
".git/objects/77/978c9d654e0a96369cfb12530ad1de7c11ad03": "4a41f6bc2865f7fb1225e67fe3f12155",
".git/objects/79/15bf1c9b9bb066fb942861ddc2fe5eff3e388d": "dc0ec8b458b1878124677bdeb2b08f8a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e5f9449f157c2fec5766d4c8082b28c0d3853d": "a007127c1f12e5bd82cf4288ae4ae2ba",
".git/objects/7a/49498d6386e3b72cb3aa04885b7abdd9074438": "953ae3455d1cbd9fc5afe9514c91ae73",
".git/objects/7c/8346f36a224eef829323cbc75cb5a7c31ef601": "865242028e25574707209fabd45d45fd",
".git/objects/7f/e012cd76a9a9af62167b0404f7acb6b7fb87c6": "e1eb17ed32bbd5e48408f206dbe7a5c6",
".git/objects/82/0806618793187350c91cab8affdb25750724c6": "d05d85b8eba9ef7959ac7d3b5411cf30",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/801a01cba35fc9dcf8cf12839d73a5aad8fbce": "3bdda54ddedeec8d74ae4d1e360d6880",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/84b5093bf79970b595e500fb7b8da3fff7e7b4": "dcf4d42cad845cc1c8c766f5d3c51c2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/6d60bd7a34446d8e69be444569cabd37df3b4f": "7d92e3213b4f91bc85ede0195a28e7fc",
".git/objects/90/c20cf0348d427e2881a4da73c3e0266e54e4e1": "0f0f1e8d0b8acccdb5974f8223801a6b",
".git/objects/91/17de5097b614c506433a6907da2d4dbf34fb50": "339722c4b4f874137772b69829015051",
".git/objects/93/928cfc7005a73421e9b11c39570a9a682a8e03": "2464655c2697c2ece51c562b9584bc1c",
".git/objects/94/94ac2b5db4ebbcd293418262f5ecfb0eea329e": "56feb53646a50c4476eaef3a2e939927",
".git/objects/9a/014bb8abf07925a23a52cd41286d52cc673c01": "54bf8c6774012f6feb17559117a19c36",
".git/objects/9e/4de7d679e77ab86fc290d7639f90cc2261753b": "5e74b308f951f5eeec1a2ffd0c42d512",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c69d253de2ee027a8693fce4793fdc2a30ce0f": "81f7a11e26a9484e144ef06aed83badb",
".git/objects/a6/6b729393f42405781cad4693ab8659439e43e1": "a40e96283c4642373c497690397ba536",
".git/objects/a8/0328c0ba622b3b0a3e9752a631e602d10f1521": "5e45982928821ab99afe966fc17f8cb2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/10cfd47c1b1051a5bc1446c9543315fd342dba": "071198927b12fdd2ffbfb1127757387b",
".git/objects/aa/b518d325f7bc01edfa2e65c1fbe98b70ddac16": "b2dd6b1d77b1763d6fabdc9cc80ba705",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/9f68600482575870375f6fb7ca509fe1fa67cb": "cb25bb3ebabc2cd9d09647de68bbe7d5",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/7ababd4c7f6f5a40f776aa643627dcee48a5e3": "95f3a23205273ba63e8c278d5fc410cd",
".git/objects/ca/0c4ec1225ec99f20389d344ba38110e9f1d49f": "faf23da2596e542fb022c6fa0c2d5855",
".git/objects/cc/3d2174fc268c6e6ba633cc9247711b81d3839d": "36f3e0000db3b31c88436015cef74fb2",
".git/objects/cc/8a23c4f6b64a97df70eccc243d085738f05a92": "4d70819cec96d22ae513a2ba2a571492",
".git/objects/cc/dfb33f338c97e03cc3d8aa6ae06b1edfc94d20": "b9c94bf4182e7db8ad30e97523e66111",
".git/objects/ce/9c3cf466b20840cca79744f84cebeca169971b": "aa9052894edd626c5e351d21d25ec436",
".git/objects/cf/73ed2ded646a686aaef3f2e5e8724a86daf5b6": "86911feb2f850d85e56c897e69a24415",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b22497b925a465306cc50eb22a275e2ece1ff1": "a5f5a7bdf73aa5e8b03078b4e1415e31",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4787916051f627e03b69f3c6ab7a2e73f09ea7": "b6b523fd527429ec7169a02291746ae0",
".git/objects/ee/cfca5196557f025668090561baa5a9d89fb803": "4621ef40072f94b068e6305705bf6b1e",
".git/objects/f3/09fe1aaf797eb68f500a262660d1716f3f5610": "b141e3cc2bd631bf248dedbf7b81736f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "e7d1d1ede38736f9b9dbbba2fe43cd69",
".git/refs/remotes/origin/main": "e7d1d1ede38736f9b9dbbba2fe43cd69",
"assets/AssetManifest.json": "2206347cf86a9b2b7045ab9e4c9b39d7",
"assets/assets/background.jpg": "7c5a77f39d60c8ebd41876f978b2d579",
"assets/assets/blank-profile.png": "7f055e242671ec98b664c6eada9d8d36",
"assets/assets/logo-phi.png": "2f7a75564888866c0de5fc044c74f1d3",
"assets/assets/log_ada.png": "de2ff27bc42b1b75c9b853799e35e335",
"assets/assets/log_arch.png": "f37909028f66c56f887226428aa465bf",
"assets/assets/log_aura.gif": "9143d59aae7ac66422795bde4687e990",
"assets/assets/log_marcas.png": "57e48f79b462418e15c825fb1dcbb703",
"assets/assets/log_mora.png": "25db5ef97f992940a24fd9b26c9a5157",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "73719fc9d57e371aa021efc93f59f363",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f376f4588afeb7aaafcae726e9a6749",
"/": "5f376f4588afeb7aaafcae726e9a6749",
"main.dart.js": "221a4b62635073dd56c9b0aa79e24587",
"manifest.json": "ebf3da6c9723ab375df3b9389c885091",
"version.json": "f55cd19e2ea76be21c1a095c260a8d8b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
