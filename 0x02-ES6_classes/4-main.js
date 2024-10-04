import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
const p = new Pricing(100, dollar);
console.log(dollar);
console.log(p.amount);
console.log(p.currency);
console.log(p.displayFullPrice());
