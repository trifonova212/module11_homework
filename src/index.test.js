import {getPercents} from './index.js';

describe ("test function getPercents", () => {

it ('75% from 100 equally 75', () => {
  expect(getPercents(75,100)).toBe(75);
})

it ('1.5% from 993 equally 14.895', () => {
  expect(getPercents(1.5,993)).toBe(14.895);
})

it ('0% from 456 equally 0', () => {
  expect(getPercents(0,456)).toBe(0);
})

it ('-1% from 46 cannot be used ', () => {
  expect(getPercents(-1,46)).toBe("Нельзя использовать число меньше 0");
})

it ('101% from 55 cannot be used', () => {
  expect(getPercents(101,55)).toBe("Нельзя использовать число больше 100");
})

});
