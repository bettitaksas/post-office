export class PostItem {
    private _address: string;
    private _postedDate: Date;

    constructor(address: string, postedDate: Date) {
        this._address = address;
        this._postedDate = postedDate;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postedDate(): Date {
        return this._postedDate;
    }

    set postedDate(value: Date) {
        this._postedDate = value;
    }
}
