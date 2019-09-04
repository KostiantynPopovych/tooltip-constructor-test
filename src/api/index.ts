class Storage {
  _write = (key: string, element: any) =>
    localStorage.setItem(key, JSON.stringify(element));

  _read = (key: string) => {
    const item = localStorage.getItem(key);
    return !!item ? JSON.parse(item) : [];
  };

  get = (key: string) => this._read(key);

  getByProp = (key: string, prop: string, value: any) =>
    this.get(key).filter((e: any) => e[prop] === value);

  put = (key: string, item: any) => {
    let elements = this.get(key);
    if (!!elements) {
      this._write(key, elements.concat(item));
    } else {
      this._write(key, item);
    }
  };

  set = (
    key: string,
    id: number | string,
    // elementKey: string,
    elementValue: any
  ) => {
    const elements = this.get(key);
    const element = elements.find((e: any) => e.id === id);
    const idx = elements.indexOf(element);
    elements[idx] = elementValue;
    this._write(key, elements);
  };

  delete = (key: string, elementId: string) => {
    const elements = this.get(key);
    const element = elements.find((e: any) => e.id === elementId);
    const idx = elements.indexOf(element);
    elements.splice(idx, 1);
    this._write(key, elements);
  };
}

export default new Storage();
