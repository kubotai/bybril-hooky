import * as b from "bobril";
import { NotificationManager } from "../src/notificationManager";
import { Effect2 } from "../src/effect2";
import { Ref } from "../src/ref";
import { State } from "../src/state";
import { StateClass } from "../src/stateClass";
import { Effect1 } from "../src/effect1";
import { Context } from "../src/context";
import { Memo } from "../src/memo";
import { ReducerComp } from "../src/reducer";

export function HooksPage(): b.IBobrilNode {
  const [comp, setComp] =
    b.useState<undefined | (() => b.IBobrilNode)>(undefined);

  return (
    <>
      <button onClick={() => setComp(() => <State />)}>State</button>
      {/* <button onClick={() => setComp(() => <StateClass />)}>State class</button> */}
      <button onClick={() => setComp(() => <Ref />)}>Ref</button>
      <button onClick={() => setComp(() => <Effect1 />)}>Effect1</button>
      <button
        onClick={() =>
          setComp(() => <Effect2 notifications={new NotificationManager()} />)
        }
      >
        Effect2
      </button>
      <button onClick={() => setComp(() => <Context />)}>Context</button>
      <button onClick={() => setComp(() => <Memo />)}>Memo</button>
      <button onClick={() => setComp(() => <ReducerComp />)}>Reducer</button>
      <hr />
      {comp}
    </>
  );
}
