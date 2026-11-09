export class Klasse {
    private _bezeichnung: string;
    private _stufe: number;
    private _schuelerAnzahl: number;

    constructor(bezeichnung: string, stufe: number, schuelerAnzahl: number) {
        this._bezeichnung = bezeichnung;
        this._stufe = stufe;
        this._schuelerAnzahl = schuelerAnzahl;
    }

    get bezeichnung(): string {
        return this._bezeichnung;
    }

    get stufe(): number {
        return this._stufe;
    }

    get schuelerAnzahl(): number {
        return this._schuelerAnzahl;
    }
}