class TurboNumber {
  constructor(private number: number) {
  }

  subtract(number: number) {
    this.number = this.number - number
  }

  result(): number {
    return this.number;
  }

  divide(number: number) {
    if (number === 0) throw new Error('Cannot divide by 0')
    this.number = this.number / number;
  }
}

it("subtract 2 from 5", () => {
  const turboNumber = new TurboNumber(5);
  turboNumber.subtract(2)
  expect(turboNumber.result()).toBe(3)
})

it("subtract 3 from 8", () => {
  const turboNumber = new TurboNumber(8);
  turboNumber.subtract(3)
  expect(turboNumber.result()).toBe(5)
})

it("divides 8 by 2", () => {
  const turboNumber = new TurboNumber(8);
  turboNumber.divide(2)
  expect(turboNumber.result()).toBe(4)
})

it("throws when dividing by 0", () => {
  const turboNumber = new TurboNumber(8);
  expect(() => turboNumber.divide(0)).toThrow('Cannot divide by 0')
})