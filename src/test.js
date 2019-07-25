let code = [
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    }
]

const d = require('./Country_code.js/index.js');
const r = code.filter(c=>
    // c.code.indexOf('B') > -1 || c.name.indexOf('B') > -1 || c.dial_code.indexOf('B') > -1
    // c.dialCode.indexOf('3') > -1
    c.dialCode.indexOf('+880')
    //   c['name'].indexOf('+') > -1 || c['code'].indexOf('+') > -1 || c['dial_code'].indexOf('+') > -1
  );
console.log(r);