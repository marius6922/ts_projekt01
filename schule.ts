import { Klasse } from "./klasse.ts";

export class Schule {
    private _name: string;
    private _schulkennzahl: string;
    private _direktor: string;
    private _klassen: Klasse[] = [];

    constructor(name: string, schulkennzahl: string, direktor: string) {
        this._name = name;
        this._schulkennzahl = schulkennzahl;
        this._direktor = direktor;
    }

    addKlasse(klasse: Klasse): void {
        this._klassen.push(klasse);
    }

    get klassen(): Klasse[] {
        return this._klassen;
    }

    get name(): string {
        return this._name;
    }
}