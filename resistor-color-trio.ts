class Resistor {
  private readonly firstBand: string;
  private readonly secondBand: string;
  private readonly thirdBand: string;
  readonly ohms: number;

  constructor(resistorBands: string[]) {
    this.firstBand = resistorBands[0];
    this.secondBand = resistorBands[1];
    this.thirdBand = resistorBands[2];
    this.ohms = this.getOhms();
  }

  /**
   * getOhms
 : number  */
  private getOhms(): number {
    const resistanceValues: { [key: string]: number } = Object.freeze({
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9,
    });

    const firstValue = resistanceValues[this.firstBand];
    const secondValue = resistanceValues[this.secondBand];
    const multiplier = 10 ** resistanceValues[this.thirdBand]

    return ((firstValue * 10) + (secondValue)) * multiplier
  }
}

export function decodedResistorValue(resistorBands: string[]): string {

  const myResistor = new Resistor(resistorBands);

  if (myResistor.ohms < 1000) {
    return `${myResistor.ohms} ohms`;
  }

  const kiloohms = myResistor.ohms / 1000
  return `${kiloohms} kiloohms`
}
