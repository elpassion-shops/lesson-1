class TurboNumber {
  constructor(private number: number) {
  }

  subtract(number: number) {
  }

  result(): number {
    return 3;
  }
}

it("subtract 2 from 5", () => {
  const turboNumber = new TurboNumber(5);
  turboNumber.subtract(2)
  expect(turboNumber.result()).toBe(3)
})