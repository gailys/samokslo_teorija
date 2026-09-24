"use strict";

const redacted = document.querySelector(".redacted");
redacted.addEventListener("click", () => {
  const revealed = document.querySelector(".revealed");
  revealed.hidden = false;
  redacted.setAttribute("aria-expanded", "true");
  redacted.hidden = true;
  document.querySelector(".reveal-hint").textContent =
    "Išvada išslaptinta. Tyrėjai prašo šios versijos pernelyg nesureikšminti.";
  revealed.setAttribute("tabindex", "-1");
  revealed.focus();
});

const theories = [
  "J egzistuoja tik tada, kai niekas iš mūsų nežiūri? Šriodingerio mergina.",
  "J yra Tomo sukurtas personažas, o susitikimas su mumis dar neįrašytas į scenarijų? „Bus matyt“ — laukiam kito sezono.",
  "J yra Justinas, o mes visą laiką tyrėme ne tą vardo galūnę? Inicialas viską atlaikė.",
  "J turi septynis vaikus, o mūsų kvietimas kalendoriuje stovi iškart po septynių būrelių ir Tomo?",
  "„Bus matyt“ reiškia, kad Tomo prašymas išeiti pas draugus dar laukia J parašo?",
  "J turi nuotrauką, kur Tomas suvalgo paskutinį sausainį? Štai ir visas mūsų išgalvotas kompromatas.",
  "Tomas kasdien veža J į „Danske Bank“, nes ten vienintelė jos modeliui tinkanti įkrovimo stotelė?",
  "Tomo navigacijoje yra tik du taškai: J ir darbas? Mygtukas „pas draugus“ atsiras kitame atnaujinime.",
  "J yra 50+, o frazė „Tomui patinka tetos“ buvo ne juokelis, bet svarbiausias bylos raktas?",
  "J net nežino, kad Tomas turi mus? Gal ji savo draugams irgi pasakoja apie paslaptingą kompaniją, kurios niekas nematė.",
  "Padas priklauso Tomui, o mes visą laiką tyrėme ne tą šlepetę?",
  "J įkalbėjo Tomą atostogauti užsienyje, nes ten mažesnė tikimybė netyčia sutikti mus?",
  "Tomas slepia mus nuo J, nes draugų istorijos nesutampa su jo pristatyta solidžia biografija?",
  "Tomas yra oficialus J palydovas Žemėje? Rytinis reisas — misijos pradžia, vakarinis — evakuacija.",
  "J yra slaptoji agentė, o susitikimui su mumis dar negauti saugumo leidimai?",
  "Ji keliauja laiku ir vis netyčia atvyksta į kitą ketvirtadienį?",
  "J yra holograma, o Tomas vis pamiršta pasiimti projektorių?",
  "Justina yra visiškai normali mergina? Ne, šita versija tyrėjams per daug radikali.",
  "J gyvena paralelinėje visatoje, kur Tomas jau supažindino ją su mumis?",
  "Ji yra slapta galutinio žaidimo lygio veikėja, o mes dar neįvykdėme šalutinių misijų?",
  "J yra undinė, o mes vis siūlome susitikti ne prie to vandens telkinio?",
  "„Bus matyt“ yra slaptas kodas, kuriuo Tomas pratęsia J nematomumo režimą? Mes tik siūlėme susitikti.",
];
let theoryIndex = 0;
document.querySelector("#generate").addEventListener("click", () => {
  theoryIndex = (theoryIndex + 1) % theories.length;
  document.querySelector("#generated-theory").textContent =
    theories[theoryIndex];
});
