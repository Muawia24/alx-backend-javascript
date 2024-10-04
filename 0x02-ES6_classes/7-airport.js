export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
