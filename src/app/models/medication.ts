export class Medication {
  id: number
  name: string
  supplier: string
  amountStored: number

  constructor(id: number, name: string, supplier: string, amountStored: number) {
    this.id = id;
    this.name = name;
    this.supplier = supplier;
    this.amountStored = amountStored;
  }
}