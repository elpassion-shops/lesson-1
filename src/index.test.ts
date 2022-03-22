class TurboNumber {
  constructor(private number: number) {
  }

  subtract(number: number) {
    this.number = this.number - number
  }

  result(): number {
    return this.number;
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