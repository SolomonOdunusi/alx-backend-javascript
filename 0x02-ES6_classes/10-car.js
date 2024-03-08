const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const { constructor } = this;
    const clone = new constructor();
    Object.getOwnPropertyNames(this).forEach((key) => {
      if (key !== '_cloneSymbol') {
        clone[key] = this[key];
      }
    });
    return clone;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
