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
  "J yra slaptoji agentė, o susitikimui su mumis dar negauti saugumo leidimai?",
  "Ji keliauja laiku ir vis netyčia atvyksta į kitą ketvirtadienį?",
  "J yra holograma, o Tomas vis pamiršta pasiimti projektorių?",
  "Justina yra visiškai normali mergina? Ne, šita versija tyrėjams per daug radikali.",
  "J gyvena paralelinėje visatoje, kur Tomas jau supažindino ją su mumis?",
  "Ji yra slapta galutinio žaidimo lygio veikėja, o mes dar neįvykdėme šalutinių misijų?",
  "J yra undinė, o mes vis siūlome susitikti ne prie to vandens telkinio?",
  "„J“ reiškia „Jau tuoj supažindinsiu“? Tai paaiškintų neįtikėtinai daug.",
];
let theoryIndex = 0;
document.querySelector("#generate").addEventListener("click", () => {
  theoryIndex = (theoryIndex + 1) % theories.length;
  document.querySelector("#generated-theory").textContent =
    theories[theoryIndex];
});
