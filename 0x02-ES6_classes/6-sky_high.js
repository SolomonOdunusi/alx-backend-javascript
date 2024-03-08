import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this.validateNumber(floors, 'Floors');
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }
}
