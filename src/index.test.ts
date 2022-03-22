import {TurboNumber} from "./TurboNumber";

it("subtract 2 from 5", () => {
  const turboNumber = new TurboNumber(5);
  turboNumber.subtract(2)
  expect(turboNumber.result()).toBe(3)
})

it("subtract 3 from 8", () => {
  const turboNumber = new TurboNumber(8).subtract(3);
  expect(turboNumber.result()).toBe(5)
})

it("divides 8 by 2", () => {
  const turboNumber = new TurboNumber(8).divide(2)
  expect(turboNumber.result()).toBe(4)
})

it("throws when dividing by 0", () => {
  const turboNumber = new TurboNumber(8);
  expect(() => turboNumber.divide(0)).toThrow('Cannot divide by 0')
})