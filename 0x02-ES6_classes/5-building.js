export default class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Sqft');
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}
