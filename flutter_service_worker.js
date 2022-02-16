'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "e277abdd56351b666fdd364d59f29964",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dc40035c87c1e6d72d387fb9766f913e",
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
".git/index": "e171466c2a756617d962c1deebe76cda",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82126ae0d29dacc512843d496145a195",
".git/logs/refs/heads/main": "08a733c7ced91ad1eafd0637fbaa2441",
".git/logs/refs/remotes/origin/main": "3a6d3897ad6c3743a6c22a093055bd06",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/0a/4a3fdb480d34a6378626398664f1bccf4c6f9b": "6defd75389d99b132b1e0af71751e2a7",
".git/objects/0b/54d15df100ae9d88fd84ea3ba1adcaa268821f": "a8b8829702c4b0ccc81fc7757cc87c1b",
".git/objects/0b/c58f2542454149a40f63647775e9104fcac712": "7e7ed9e1ea367f9045de2cda85ce856b",
".git/objects/0b/d5913bcfc9f40cccfd34a89dab2a8b853a57dd": "298ee62115c2ddc2a750cea33fd005ff",
".git/objects/0c/4e1c795c48a0a9f720ca187b7bcbab0e4cf3e2": "47e6d24f65ba29c092cc6377069eee39",
".git/objects/11/e2c9b43b20d0eb157e5a48bf0325cf218df088": "f075e2ca16afedf1129dbc8facbd43f6",
".git/objects/12/4263ae2dcf622be0ea1b60330edcdf65596c81": "44aab2dbb0c37d3ea3d7be5b5743211e",
".git/objects/16/1d57cefdcf73a9bc91a913318d654cc38cc627": "1be30c13448c60dc5be57a129a6a7c82",
".git/objects/18/73da90290da0f759aa6202f89eb87e6b929427": "f23418b6591fac9f24dd4982b9ad76f2",
".git/objects/18/8362a2933cdeb4bc04a734c6d73bf4d4664e79": "5db8862540521af9131aee35aec491d5",
".git/objects/19/4c08aedefb51736fafce759a80fcec69de2c29": "638a606bed83f6ac7e8ca43cd57162c9",
".git/objects/1a/543a5da1484289d7b28e5915591cdb22f5f874": "0f43d470d69332f5e8c9da6301a5f7fa",
".git/objects/1b/8ef4231275c06f04d55d377b73422f8c686a5f": "c89c6b097c3012feacc1fc4857b21b26",
".git/objects/1c/1198e786b73781b91dae27d170f1ce86ace432": "af02f71b75715c70d01b65336a0ea687",
".git/objects/1d/70df62a5df1d0baaea5c0524710f49d71c4c1b": "ac68df5ee64e7dda9ef995009d3494f8",
".git/objects/1d/71bd77e01787998324922b27e45ffcad06ee11": "d69b8c2f55ec2f791cc7bfadcfadd8a3",
".git/objects/1d/e991470c1ff9fb942dea592811230af98dd63e": "a740e55db6fc2a925c2723a0f72909b9",
".git/objects/22/d891c15e17fbcad8c77d813b60a9492a18d406": "4130eb95e49661a656cb8177b347172a",
".git/objects/23/e8e0615bb8b533413e105c05a154d30b1a833f": "1e92fc0059cfc5246e7cc67ff720f92a",
".git/objects/2a/44dff300058abb5e244227d340a4a36eaa63d0": "276291083ce46a5cacec0f546312ba32",
".git/objects/2b/e3a2d9ab4bdb319266d24420299ef278a72d3b": "621226dd3320f5504177bbc110f4af4d",
".git/objects/2c/139e98e45a3b393f36bc028e210804e3217811": "2242e312ac43dd0728e43efe67f29c45",
".git/objects/2d/3e804b020dbf3eb9e1fe1137f9d50b535dcfb0": "0df3e32f1f413a01bc039aafb8afe4ab",
".git/objects/2f/b5bb63682d564f8d3efa00575f8e6a85ceac49": "0d8d4a9c7a22a530492815deaafdf5fd",
".git/objects/31/aa2092fce0369507e64661b2d8bdc950094c16": "156b10da87573c3b2da4023508ae4180",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/41/e126e1d52f5f5c38d9db4669a0a8a1469b7af5": "b0bb1a5555603dca3812b9fb55cb4932",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/adb5a8a7cf8cd118ffbe5f0ed4443c90a2f04b": "8ee55a082b338afcdd3d9485c8485bbd",
".git/objects/4d/4c3df11056fa4e6ded9cd419a884633f78c970": "95b0877c22c5dad5e193727ea4fc3765",
".git/objects/4e/4cd454f61ef682cfdaa889b58264a3117fdc35": "34fc9cc118346e118d6cdf454aa380eb",
".git/objects/4e/81711bfbab7599b3a9149b37203aa60e766d73": "43de4a68ea4142848e75ae32ba48f94a",
".git/objects/52/e3eb33ee111ae691a04af0bd8c886f7fb09388": "a111c60eb1d4f3482e0ea70b4ebad23c",
".git/objects/53/3399af5c032e920e674b670b10c98bb1efcc84": "f7cc1d804e1857515009fa7a344dc04b",
".git/objects/5e/6faadbaf5619d3a3bb6f450dae352bf1a09ae3": "6207e36ec3a980a53ce7d4f0d03a147f",
".git/objects/5e/7cddbdf8869d1bbcc88ab95cc657784103a91c": "573cb4207ef3706358f1fcffc1cbf5f1",
".git/objects/60/18251de4aa88f2e80abc2eda18882562702a8f": "03c98b956b21cccb89f52b1cfdaa0ddc",
".git/objects/64/546ba553e3e31b5ad864f22f70f8b460d61729": "f57888dd96cd804a14d7cac0225a9034",
".git/objects/64/5e94fb4bc4f4229eb324cbed70af6ce7fa3e3c": "3dbe143303aa9fd666f6ae81179b7540",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/65/b756122b83417a6cbda2eb48b49ac78c6f9ed8": "c659da14125dccc6eb93024873b99ca7",
".git/objects/66/77c91a77c20119faece2fa6c3d8fefd746e8a3": "33ccaa0c07cbdf8fdc2423bf05441aae",
".git/objects/6b/1980c96ef877c0e48c4728aef43ca0666ab5a6": "e27194ca44f662921736160c1aef4025",
".git/objects/6f/28b13abf9a3a14c6cdbbf8cb50e84ee7050fb3": "c08f416d2f31b4cc342e4a5f624bdcea",
".git/objects/6f/75b51304a8de261ea86a754ab61a1458b856c7": "23eefde9e442c0a4c6ba9bd3baaa5d86",
".git/objects/74/01a44c5a4133016d3001d4de5c39f8e978808f": "f01ea30735b96c5d9ba338416ddac1c0",
".git/objects/77/978c9d654e0a96369cfb12530ad1de7c11ad03": "4a41f6bc2865f7fb1225e67fe3f12155",
".git/objects/79/15bf1c9b9bb066fb942861ddc2fe5eff3e388d": "dc0ec8b458b1878124677bdeb2b08f8a",
".git/objects/79/6f8fed2953c9d328f82c6c9f4482c209e49cee": "62d680a4bd70021862cd150bca140f5a",
".git/objects/79/b5a5d74fd6597b51961ccf7c424bd52d1a366f": "674ac15f7c3b989d4836dd9a588712d4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e5f9449f157c2fec5766d4c8082b28c0d3853d": "a007127c1f12e5bd82cf4288ae4ae2ba",
".git/objects/7a/49498d6386e3b72cb3aa04885b7abdd9074438": "953ae3455d1cbd9fc5afe9514c91ae73",
".git/objects/7c/8346f36a224eef829323cbc75cb5a7c31ef601": "865242028e25574707209fabd45d45fd",
".git/objects/7f/20be7caf17913db48ced81254e83e4a205e09d": "1728b4b59ce07a01109c399b81359777",
".git/objects/7f/e012cd76a9a9af62167b0404f7acb6b7fb87c6": "e1eb17ed32bbd5e48408f206dbe7a5c6",
".git/objects/82/0806618793187350c91cab8affdb25750724c6": "d05d85b8eba9ef7959ac7d3b5411cf30",
".git/objects/82/d7fee1e39e0bf5ca2f5f18fe7bb84d057d63b5": "3331feb36bfc3b0375520ee7e6154bd6",
".git/objects/86/26417da57ca65743176426596e62949af64f98": "64779abc1c89e2f794c02302680046e6",
".git/objects/86/2ddbf19fabc37ec695879d5a3ddfb46fff9f61": "14cb9a79ba95419752c1073ee514a84d",
".git/objects/86/3ea09d283b4598de67d36ed1d84ac6a4f8a421": "01727caa1aff34e35ef57b76a21915fe",
".git/objects/87/46be184f8221cbaa9eb94be10c134b7dfa69f7": "1e18972b5c844e3467ae2e6bb46c6f75",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/801a01cba35fc9dcf8cf12839d73a5aad8fbce": "3bdda54ddedeec8d74ae4d1e360d6880",
".git/objects/87/90b6b2f4b32d066f28e11ae68924808dcfec93": "52e7c2bfcfae76898e1edae457249bd5",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/84b5093bf79970b595e500fb7b8da3fff7e7b4": "dcf4d42cad845cc1c8c766f5d3c51c2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/b1b5433a05aeb21c7f9e4e767166db8b346322": "b38bada53355223d54f5571aaff01ddd",
".git/objects/90/6d60bd7a34446d8e69be444569cabd37df3b4f": "7d92e3213b4f91bc85ede0195a28e7fc",
".git/objects/90/c20cf0348d427e2881a4da73c3e0266e54e4e1": "0f0f1e8d0b8acccdb5974f8223801a6b",
".git/objects/91/17de5097b614c506433a6907da2d4dbf34fb50": "339722c4b4f874137772b69829015051",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/93/928cfc7005a73421e9b11c39570a9a682a8e03": "2464655c2697c2ece51c562b9584bc1c",
".git/objects/94/94ac2b5db4ebbcd293418262f5ecfb0eea329e": "56feb53646a50c4476eaef3a2e939927",
".git/objects/9a/014bb8abf07925a23a52cd41286d52cc673c01": "54bf8c6774012f6feb17559117a19c36",
".git/objects/9b/6ed088bffdc8fca5d28af986d7e60b1d1ddcc9": "cf54ea6686acdcf5b0923060a0f85927",
".git/objects/9e/4de7d679e77ab86fc290d7639f90cc2261753b": "5e74b308f951f5eeec1a2ffd0c42d512",
".git/objects/9f/62b8da86de5cb270ffa60450edc07337237385": "6985b33979a06d30ac80f6f386f253b2",
".git/objects/9f/c8dd1a4a84dfe6ffa8ff0860f5a8b38e0623a3": "0c7828ebe1cadc7a7d37b1b966f8a379",
".git/objects/a1/0b6d337d4af0a7f6f759b9706717a7c3f1abd2": "9cf5ca7b57a140f79c6e6f94741d2d2d",
".git/objects/a1/169113770acb6726d4e7314ace88cb7ac7d596": "c30bee775ac0b3c0fe36fee3302f7740",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c69d253de2ee027a8693fce4793fdc2a30ce0f": "81f7a11e26a9484e144ef06aed83badb",
".git/objects/a5/dc2df1d86c253a686cc58756890ab6b9456bbe": "226f0a01e5200065fedef83547c44a75",
".git/objects/a6/6b729393f42405781cad4693ab8659439e43e1": "a40e96283c4642373c497690397ba536",
".git/objects/a8/0328c0ba622b3b0a3e9752a631e602d10f1521": "5e45982928821ab99afe966fc17f8cb2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/10cfd47c1b1051a5bc1446c9543315fd342dba": "071198927b12fdd2ffbfb1127757387b",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/b518d325f7bc01edfa2e65c1fbe98b70ddac16": "b2dd6b1d77b1763d6fabdc9cc80ba705",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/9f68600482575870375f6fb7ca509fe1fa67cb": "cb25bb3ebabc2cd9d09647de68bbe7d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b5/64d1dcea5c4bf0360f0b7c49e27ec15be68154": "bd335cc606990394921c283e272c425d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/6373ee0ceaa20822dfb1455883d960e554f9bb": "849fe07867d111a1892b833597b4c70b",
".git/objects/bd/c93488fd8a4cc533d321b00dc6c96ce0d899f7": "98d091b5c27ccd6420017d194167d0e8",
".git/objects/be/7ababd4c7f6f5a40f776aa643627dcee48a5e3": "95f3a23205273ba63e8c278d5fc410cd",
".git/objects/be/8bd7861c5526e44777c6cb766385bea9a1fc94": "02c02db9fe5cb6b66599f399cee005eb",
".git/objects/c5/68f3f374053f04eb0701209aaea59704760861": "a5cefefc3fb35fc42d2dfbc407913b51",
".git/objects/ca/0c4ec1225ec99f20389d344ba38110e9f1d49f": "faf23da2596e542fb022c6fa0c2d5855",
".git/objects/ca/c623ab97302eb317c605bc6cd064554d34f8ad": "db476e135fac0f073cfde5aeb9edf309",
".git/objects/ca/c832cd1914210ca990d5190903eb804b311b59": "e9262d1652e9cc42bcf8fbcd5bbc3ce0",
".git/objects/cb/5430a4ee36c75398cb11316aabef1ba92d50b9": "f90c6445a67b8630a9ad3b1b05cd18f0",
".git/objects/cc/3d2174fc268c6e6ba633cc9247711b81d3839d": "36f3e0000db3b31c88436015cef74fb2",
".git/objects/cc/8a23c4f6b64a97df70eccc243d085738f05a92": "4d70819cec96d22ae513a2ba2a571492",
".git/objects/cc/dfb33f338c97e03cc3d8aa6ae06b1edfc94d20": "b9c94bf4182e7db8ad30e97523e66111",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/9c3cf466b20840cca79744f84cebeca169971b": "aa9052894edd626c5e351d21d25ec436",
".git/objects/cf/73ed2ded646a686aaef3f2e5e8724a86daf5b6": "86911feb2f850d85e56c897e69a24415",
".git/objects/d1/cb973c1ac707a411daf31160f3f1c46c99827e": "70d0d0a848a36b0cb4365d67bb3e5578",
".git/objects/d2/a6ea18598d32e1dad038ac901d544248ca58e1": "b43bf39770371c1f5a63c5e7bb13c422",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/36ad27117031c3ebd7d3cc2a2e5df7ea3739a1": "50446ed1d4db37024a87c31eb04be492",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b22497b925a465306cc50eb22a275e2ece1ff1": "a5f5a7bdf73aa5e8b03078b4e1415e31",
".git/objects/eb/3acd6ba8a91b8e97ad3fe4f37e1d97e506bf29": "1c125a4f57f4e385ddfa76f1ccd4a7cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/83317a81c7ddcdc8c9f460ae73c41545692dd8": "42c1b0f17bd6235e2360bb5694beacfa",
".git/objects/ed/4787916051f627e03b69f3c6ab7a2e73f09ea7": "b6b523fd527429ec7169a02291746ae0",
".git/objects/ee/cfca5196557f025668090561baa5a9d89fb803": "4621ef40072f94b068e6305705bf6b1e",
".git/objects/f3/09fe1aaf797eb68f500a262660d1716f3f5610": "b141e3cc2bd631bf248dedbf7b81736f",
".git/objects/fa/a343f3cc995fab2ac41b006ab573d8f7ed918a": "b0e98e41fa536213b05c474cf80d36f7",
".git/objects/fe/a40f02bd3737c7a2fb5b670511bd90622ddcee": "665c673cc425b9b901a4f3f48c4141d9",
".git/ORIG_HEAD": "8e6c06dd56f820d50e59b68d4fd6d1ca",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "cfb4d97fe439a323b9abfd346156b963",
".git/refs/remotes/origin/main": "cfb4d97fe439a323b9abfd346156b963",
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
"assets/NOTICES": "0f1cec12dc924a5989b276d71634ac8e",
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
"index.html": "40851db58067f653002b93bf80cf0da8",
"/": "40851db58067f653002b93bf80cf0da8",
"main.dart.js": "b0f3be1921164bab75cbf3b46a7e9593",
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
