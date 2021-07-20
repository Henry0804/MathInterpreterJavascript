export default class Hashmap {
  Key = [];
  Value = [];
  constructor() {
  }

  get(k) {
    let ret = -1;
    this.Key.forEach((item, i) => {
      if (item==k) {ret = i;}
    });
    return this.Value[ret];
  }

  put(key,value) {
    this.Key = this.Key.concat(key);
    this.Value = this.Value.concat(value);
  }

  remove(key) {
    let ret = -1;
    this.Key.forEach((item, i) => {
      if (item==k) {ret = i;}
    });
    this.Key.splice(ret,1);
    this.Value.splice(ret,1);
  }
}
