function objectFactory(library, orders) {
  let arr = [];
  for (const curEl of orders) {
    let factoryObj = Object.fromEntries(Object.entries(curEl.template));
    for (const curPart of curEl.parts) {
      factoryObj[curPart] = library[curPart];
    }
    arr.push(factoryObj);
  }
  return arr;
}
let library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

let orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  },
];
let result = objectFactory(library, orders);
console.log(result);
