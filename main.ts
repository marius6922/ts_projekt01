import { Lehrer } from "./lehrer.ts";
import { Schule } from "./schule.ts";
import { StundenplanZuteilung } from "./plan.ts";
import { Klasse } from "./klasse.ts";

const schule = new Schule(
    "HTL Dornbirn",
    "123456",
    "Frau Mag. Mayer"
);

const klasse1 = new Klasse("3AHIF", 3, 28);
const klasse2 = new Klasse("8AHIF", 4, 25);

const lehrer1 = new Lehrer("Herr Huber", "Programmieren", 18);
const lehrer2 = new Lehrer("Frau Steiner", "Deutsch", 16);

schule.addKlasse(klasse1);
schule.addKlasse(klasse2);

const zuteilung1 = new StundenplanZuteilung(
    lehrer1,
    klasse1,
    "Programmieren",
    4
);

const zuteilung2 = new StundenplanZuteilung(
    lehrer2,
    klasse1,
    "Deutsch",
    3
);

console.log(zuteilung1.beschreibung());
console.log(zuteilung2.beschreibung());