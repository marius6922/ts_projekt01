import { Lehrer } from "./lehrer.ts";
import { Klasse } from "./klasse.ts";

export class StundenplanZuteilung {
    private _lehrer: Lehrer;
    private _klasse: Klasse;
    private _fach: string;
    private _wochenstunden: number;

    constructor(
        lehrer: Lehrer,
        klasse: Klasse,
        fach: string,
        wochenstunden: number
    ) {
        this._lehrer = lehrer;
        this._klasse = klasse;
        this._fach = fach;
        this._wochenstunden = wochenstunden;
    }

    get lehrer(): Lehrer {
        return this._lehrer;
    }

    get klasse(): Klasse {
        return this._klasse;
    }

    get fach(): string {
        return this._fach;
    }

    get wochenstunden(): number {
        return this._wochenstunden;
    }

    beschreibung(): string {
        return `${this._lehrer.name} unterrichtet ${this._fach} in ${this._klasse.bezeichnung} (${this._wochenstunden} Wochenstunden).`;
    }
}