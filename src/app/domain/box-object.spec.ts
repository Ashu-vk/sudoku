import {BoxObject} from "./box-object";

describe('BoxObject', () => {
  it('should create an instance of BoxObject', () => {
    const obj = new BoxObject(5,true);
    expect(obj).toBeTruthy()
  });

  it('should create an instance of BoxObject', () => {
    const obj = new BoxObject(5,true);
    expect(obj.value).toEqual(5);
    expect(obj.isEditable).toEqual(true)
  });
});
