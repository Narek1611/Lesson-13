const obj = {
  _name: [],

  set name(value) {
    let names = value.split(", ");
    obj._name = names.map((item) => [item, item.length]);
  },

  get name() {
    return obj._name;
  },
};

obj.name = "Narekaci, Mergel";

console.log(obj.name);
