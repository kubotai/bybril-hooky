import * as b from "bobril";
import { observable } from "bobx";

export class StateClass extends b.Component {
  private _store = new StateClassStore();

  render(): b.IBobrilNode {
    return (
      <div>
        <input
          type="text"
          onChange={(value: string) => (this._store.text = value)}
        />
        <p>{this._store.text}</p>
      </div>
    );
  }
}

class StateClassStore {
  @observable
  text = "";
}
