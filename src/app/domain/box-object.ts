export class BoxObject {
  constructor(val: number|undefined, isEditable: boolean) {
    this.value = val;
    this.isEditable = isEditable
  }
  value: number|undefined;
  isEditable: boolean
}
