class Resistor {
  readonly firstBand: number;
  readonly secondBand: number;
  readonly thirdBand: number;
  readonly ohms: number;

  private readonly resistanceValues: { [key: string]: number } = Object.freeze({
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

  constructor(resistorBands: string[]) {
    this.firstBand = this.resistanceValues[resistorBands[0]];
    this.secondBand = this.resistanceValues[resistorBands[1]];
    this.thirdBand = this.multiplier(resistorBands[2]);
    this.ohms = this.getOhms();
  }

  private multiplier(color: string): number {
    return this.resistanceValues[color] * 10
  }

  /**
   * getOhms
 : number  */
  private getOhms(): number {
    return ((this.firstBand * 10) + (this.secondBand)) * this.thirdBand
  }
}


export function decodedResistorValue(resistorBands: string[]): string {

  const myResistor = new Resistor(resistorBands);

  return `${myResistor.ohms} ohms`;

}
