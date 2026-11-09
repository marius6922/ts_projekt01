export class Lehrer {
    private _name: string;
    private _fach: string;
    private _wochenstunden: number;

    constructor(name: string, fach: string, wochenstunden: number) {
        this._name = name;
        this._fach = fach;
        this._wochenstunden = wochenstunden;
    }

    get name(): string {
        return this._name;
    }

    get fach(): string {
        return this._fach;
    }

    get wochenstunden(): number {
        return this._wochenstunden;
    }
}