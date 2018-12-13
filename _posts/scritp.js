const fs = require("fs")

const data = [
  {
    "id": 3,
    "title": "VÝSLEDKY 2014",
    "perex": "Výsledky prvního ročníku PoHodové devítky jsou dostupné online.",
    "content": "<p>Výsledky prvního ročníku PoHodové devítky jsou dostupné na našem webu <a href=\"../../../../vysledky/pohodova-devitka-2014\">PoHodové devítky</a></p>\n<p>nebo i na webu <a href=\"http://www.bezvabeh.cz/zavod/3675-pohodova-devitka\">bezvabeh.cz</a></p>\n<p> </p>",
    "hidden": 0,
    "created": "2014-09-21 10:37:19"
  },
  {
    "id": 2,
    "title": "Fotogalerie",
    "perex": "http://pohodovadevitka.rajce.idnes.cz/",
    "content": "<p>Fotky z různých zdrojů naleznete na:</p>\n<p>http://pohodovadevitka.rajce.idnes.cz/</p>",
    "hidden": 1,
    "created": "2014-09-21 10:33:54"
  },
  {
    "id": 4,
    "title": "První ročník PoHodové devítky byl uspořádán ve spolupráci s TJ Sokol Křoví",
    "perex": "http://www.obec-krovi.cz/tj-sokol-krovi/os-1003",
    "content": "<p>http://www.obec-krovi.cz/tj-sokol-krovi/os-1003</p>",
    "hidden": 0,
    "created": "2014-10-27 21:05:51"
  },
  {
    "id": 5,
    "title": "PoHodová devítka 2015 bude součástí ENVIROCUPu!",
    "perex": "http://www.sportvm.cz/envirocup",
    "content": "<p>Letošní ročník PoHodové devítky bude součástí Envirocupu - seriálu nejen běžeckých závodů na Velkomeziříčsku. Z celkového počtu osmi závodů se bude každému závodníkovi bodovat šest nejlepších dosažených výsledků z celého seriálu. \"Blátivý kameňák\" - první závod Envirocupu - bude odstartován již v neděli 22. 3. v Kamenné u Tasova. Přijďte si ho zaběhnout a získejte tak první body do celkového hodnocení Envirocupu! :)</p>\n<p><a href=\"http://www.sportvm.cz/envirocup\">http://www.sportvm.cz/envirocup</a></p>",
    "hidden": 0,
    "created": "2015-03-16 07:54:05"
  },
  {
    "id": 9,
    "title": "PoHodová devítka 2016",
    "perex": "3. ročník našeho závodu se bude konat opět týden po bítešských hodech - v neděli 18. 9. 2016. Dětské kategorie budou závodit od 10 hodin, hlavní závod odstartuje ve 12 hodin od fotbalového stadionu. Zázemí závodu je jak je zvykem na fotbalovém stadionu. O",
    "content": "<p>3. ročník našeho závodu se bude konat opět týden po bítešských hodech - v neděli 18. 9. 2016. Dětské kategorie budou závodit od 10 hodin, hlavní závod odstartuje ve 12 hodin od fotbalového stadionu. Zázemí závodu je jak je zvykem na fotbalovém stadionu. Online registrace za zvýhodněné startovné budou zprovozněny v následujících několika dnech.</p>",
    "hidden": 0,
    "created": "2016-08-17 22:00:38"
  },
  {
    "id": 7,
    "title": "VÝSLEDKY 2015",
    "perex": "Výsledky z PoHodové devítky 2015 konečně na webu.",
    "content": "<p>Abyste si mohlil porovnat své výkony z <strong>PoHodové devítky 2015</strong>, připravili jsme je pro vás v přehledné formě na stránce <a href=\"/vysledky/pohodova-devitka-2015/9-km\">Výsledky 2015</a>.</p>",
    "hidden": 0,
    "created": "2015-09-20 11:51:29"
  },
  {
    "id": 8,
    "title": "Fotky ročníku 2015 zveřejněny",
    "perex": "Protože víme, jak nedočkavě vyhlížíte fotky z PoHodové devítky 2015, dali jsme si na čas a zveřejnili je na našem účtu na rajčeti.",
    "content": "<p>Protože víme, jak nedočkavě vyhlížíte fotky z PoHodové devítky 2015, dali jsme si na čas a zveřejnili je na našem účtu na rajčeti.</p>",
    "hidden": 0,
    "created": "2015-09-20 14:06:59"
  },
  {
    "id": 10,
    "title": "Výsledky PoHodové devítky 2016",
    "perex": "Výsledky dětských i dospělých kategorií  na stránkách Pteamu:\nhttp://www.pteam-registration.com/blog/essential_grid/pohodova-devitka/",
    "content": "Výsledky dětských i dospělých kategorií  na stránkách Pteamu:\nhttp://www.pteam-registration.com/blog/essential_grid/pohodova-devitka/",
    "hidden": 0,
    "created": "2016-09-18 18:23:26"
  },
  {
    "id": 11,
    "title": "Propozice ročníku 2017",
    "perex": "Propozice ročníku 2017 jsou k vidění v záložce \"Propozice",
    "content": "<p>Propozice ročníku 2017 jsou k vidění v záložce <a href=\"http://www.behbites.cz/propozice\">Propozice</a></p>",
    "hidden": 0,
    "created": "2017-08-08 11:41:52"
  },
  {
    "id": 12,
    "title": "REGISTRACE",
    "perex": "Nestihli jste se registrovat online? Nevadí, lze se samozřejmě přihlásit i na místě, a to od 9 hodin dětské kategorie a od 12 hodin na hlavní závod.",
    "content": "<p>Nestihli jste se registrovat online? Nevadí, lze se samozřejmě přihlásit i na místě, a to od 9 hodin dětské kategorie a od 12 hodin na hlavní závod.</p>",
    "hidden": 0,
    "created": "2017-09-11 12:39:33"
  },
  {
    "id": 15,
    "title": "Běžecký víkend ve Žďárských vrších",
    "perex": "Běžecký víkend ve Žďárských vrších",
    "content": "<p>Ahoj běžci. Stejně jako vloni uspořádáme běžecký víkend (pátek-neděle) ve Žďárských vrších, a to v termínu 23.-25.3. Ubytování zajištěno v penzionu Fryšava ve stejnojmenné vesnici v srdci Žďárskcýh vrchů. Neváhejte, kapacita je omezena.</p>\n<p>Zde je rámocvý program:</p>\n<p><u> 1. den: pátek 23.3.</u></p>\n<p>13:00                        odjezd z místa startu PH9 (fotbalový stadion ve Velké Bíteši),</p>\n<p>14:00                        ubytování penzion Fryšava – Fryšava pod Žákovou horou</p>\n<p><strong>15:30                        1. trénink („monitoring terénu“)</strong></p>\n<p>18:00                        večeře</p>\n<p>19:00                        společný večer (volná zábava, hry, soutěže, atp.)</p>\n<p>22:00                        večerka<u></u></p>\n<p><u> 2. den: sobota 24.3.</u></p>\n<p>7:15                      dobrovolná rozcvička</p>\n<p>8:00 – 9:30            snídaně</p>\n<p><strong>9:30                       2. trénink („dáme si do těla“)</strong></p>\n<p>12:00                     oběd</p>\n<p><strong>15:00                     3. trénink („variabilita tréninku“)</strong></p>\n<p>17:30 – 19:00         1. skupinka wellness penzion Fryšava</p>\n<p>19:00 – 20:00         1. skupinka večeře</p>\n<p>18:00 – 19:00         2. skupinka večeře</p>\n<p>19:00 – 20:30         2. skupinka wellness penzion Fryšava</p>\n<p>20:30 – 22:00         společný večer</p>\n<p>22:00?                    večerka</p>\n<p><u> 3. den: neděle 25.3.</u></p>\n<p>7:45                          dobrovolná rozcvička</p>\n<p>8:00 – 9:30                snídaně</p>\n<p><strong>10:00                        4. trénink („vyběhejme naběhané“)</strong></p>\n<p>12:00                        oběd</p>\n<p>13:00                        odjezd</p>\n<p>13:30                        bazén – regenerace Městské lázně NMNM</p>\n<p>15:00                        odjezd domů</p>\n<p>16:00                        návrat</p>\n<p> </p>\n<p>Cena:                         1668 Kč za osobu</p>\n<p>V ceně:                      ubytování + plná penze + finská sauna s relaxační zónou</p>\n<p>Masáže:                     různé druhy (hradí si každý individuálně)</p>\n<p>                                 více info: <a href=\"https://www.penzionfrysava.cz/masaze\">https://www.penzionfrysava.cz/masaze</a></p>\n<p>Povinná výbava:         běžecké (sportovní) oblečení, obutí (spíše do terénu), plavky, dobrá nálada</p>\n<p>Tréninky:                  1-2 hodiny (možno zkrátit nebo prodloužit dle domluvy)</p>\n<p><strong>PŘIHLÁŠKY:             zkundera@seznam.cz nebo do zpráv na Facebooku uživateli Zdeněk Kundera. Uzávěrka přihlášek 31. 1. 2018.</strong></p>\n<p>Změny v časovém harmonogramu a v náplni tréninků po vzájemné domluvě vyhrazeny.</p>",
    "hidden": 0,
    "created": "2018-01-10 08:35:14"
  },
  {
    "id": 16,
    "title": "PoHodová devítka 2018 se kvapem blíží!",
    "perex": "PoHodová devítka 2018 se kvapem blíží! Už pátý ročník PoHodové devítky se bude konat v neděli 16. 9. 2018 se zázemím tradičně na fotbalovém stadionu.",
    "content": "<p>Už pátý ročník PoHodové devítky se bude konat v neděli 16. 9. 2018 se zázemím tradičně na fotbalovém stadionu.</p>",
    "hidden": 0,
    "created": "2018-07-27 12:05:46"
  },
  {
    "id": 17,
    "title": "kategorie Nejlepší Bítešák, Nejlepší Bítešačka",
    "perex": "Pro ty, kteří budou chtít startovat v kategorii \"Nejlepší Bítešák\" nebo \"Nejlepší Bítešačka\"... nenechte si doma občanku nebo jiný doklad totožnosti, podle kterého budeme moci u prezence ověřit místo trvalého bydliště. Chceme tak předejít případným nesrov",
    "content": "<p>Pro ty, kteří budou chtít startovat v kategorii \"Nejlepší Bítešák\" nebo \"Nejlepší Bítešačka\"... nenechte si doma občanku nebo jiný doklad totožnosti, podle kterého budeme moci u prezence ověřit místo trvalého bydliště. Chceme tak předejít případným nesrovnalostem, děkujeme.</p>",
    "hidden": 0,
    "created": "2018-09-11 22:49:34"
  },
  {
    "id": 18,
    "title": "Registrace na místě",
    "perex": "Pokud jste nestihli registraci online, nevadí. Není problém se zaregistrovat v zázemí závodu - na fotbalovém stadionu od 9 hodin děti, od 12 hodin dospělí. Předpověď počasí hlásí ideální běžecké podmínky :)",
    "content": "<p>Pokud jste nestihli registraci online, nevadí. Není problém se zaregistrovat v zázemí závodu - na fotbalovém stadionu od 9 hodin děti, od 12 hodin dospělí. Předpověď počasí hlásí ideální běžecké podmínky :)</p>",
    "hidden": 0,
    "created": "2018-09-14 13:55:33"
  },
  {
    "id": 19,
    "title": "Slosování startovních čísel o hodnotnou cenu",
    "perex": "Po vyhlášení vítězů jednotlivých kategorií proběhne slosování startovních čísel o hodnotnou cenu, proto doporučujeme nespěchat domů :)",
    "content": "<p>Po vyhlášení vítězů jednotlivých kategorií proběhne slosování startovních čísel o hodnotnou cenu, proto doporučujeme nespěchat domů :)</p>",
    "hidden": 0,
    "created": "2018-09-14 14:46:58"
  },
  {
    "id": 20,
    "title": "Do fotogalerie jsou přidány fotky z letošního ročníku PoHodové devítky",
    "perex": "Do fotogalerie jsou přidány fotky z letošního ročníku PoHodové devítky",
    "content": "<p>Do fotogalerie jsou přidány fotky z letošního ročníku PoHodové devítky. Fotek je spousta, určitě se každý, včetně dětí, najde :)</p>",
    "hidden": 0,
    "created": "2018-09-24 09:01:21"
  }
].forEach((item) => {
  const created = item.created.substr(0, 10)
  const name = item.title.toLowerCase().replace(/\s+/g, '-')
  .replace(/ř/g, 'r')
  .replace(/š/g, 's')
  .replace(/č/g, 'c')
  .replace(/ž/g, 'z')
  .replace(/ú/g, 'u')
  .replace(/ů/g, 'u')
  .replace(/ě/g, 'e')
  .replace(/ý/g, 'y')
  .replace(/á/g, 'a')
  .replace(/í/g, 'i')
  .replace(/é/g, 'e')
  .replace('!', '')
  const file = `${created}-${name}.md`
  const content = `---
layout:      post
title:       "${item.title}"
published:   ${item.hidden == 0 ? "true" : "false"}
description: "${item.perex}"
date:        "${item.created}"
---

${item.content}`
  fs.writeFileSync(file, content)
})

