# Projektas J — Neišaiškinta

Lietuviškas satyrinis sąmokslo teorijų straipsnis apie Tomą ir paslaptingąją J.

Statinis puslapis be diegiamų priklausomybių: HTML, CSS ir JavaScript. Veikia „GitHub Pages“, pritaikytas telefonams. Šriftai įkeliami iš „Google Fonts“; be interneto naudojami sisteminiai pakaitalai. Jokios analitikos ar duomenų rinkimo.

## Peržiūra

Atidarykite `index.html` naršyklėje arba šiame kataloge paleiskite `python -m http.server 8000` ir atverkite `http://localhost:8000`.

## GitHub Pages

Saugyklos **Settings → Pages → Build and deployment** pasirinkite **Deploy from a branch**, šaką **main** ir katalogą **/ (root)**.

Puslapio adresas: https://gailys.github.io/samokslo_teorija/

Tekstas redaguojamas `index.html`, išvaizda — `styles.css`, papildomos teorijos — `script.js`.

## Paieškos sistemos ir privatumas

Puslapio HTML turi `noindex, nofollow, noimageindex` robots meta žymą.
Ji nurodo taisyklių besilaikančioms paieškos sistemoms neindeksuoti puslapio;
ji neuždraudžia puslapio parsisiųsti ir nėra prieigos apsauga.
„Google“ turi galėti nuskaityti puslapį, kad pamatytų `noindex`.
Todėl `robots.txt` su `Disallow` čia nepridedamas. Be to, šio projekto
`/samokslo_teorija/robots.txt` negali pakeisti domeno šaknies `/robots.txt` taisyklių.
Viešas puslapis ir vieša „GitHub“ saugykla nėra privatūs. Tikram uždaram
draugų puslapiui reikalinga serverio pusėje tikrinama prieiga.

## Nuorodos peržiūros metaduomenys

`index.html` turi „Open Graph“ ir „Twitter Card“ žymas. Viešas 1200 × 630 JPEG
peržiūros paveikslėlis: `assets/projektas-j-share-v1.jpg`. Jis pasiekiamas be
JavaScript ir prisijungimo.

Norint perkurti paveikslėlį: `python -m pip install Pillow`, tada
`python scripts/generate_social_preview.py`. Generatorius naudoja „Windows“
Georgia / Arial šriftus arba „Linux“ DejaVu pakaitalus. Svetainės veikimui
Python ir Pillow nereikia.

Keičiant paveikslėlį rekomenduojama pakeisti jo failo versiją ir atnaujinti
visas paveikslėlio nuorodas metaduomenyse (įskaitant `og:image:secure_url`).
„Facebook“ peržiūrą galima tikrinti ir atnaujinti per
[Sharing Debugger](https://developers.facebook.com/tools/debug/).
