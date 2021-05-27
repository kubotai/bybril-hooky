import * as b from "bobril";

const typPricti = "pricist";
const typOdecti = "odecist";

interface IReducerState {
  count: number;
}
interface IReducerAction {
  type: string;
}

function reducer(state: IReducerState, action: IReducerAction): IReducerState {
  switch (action.type) {
    case typPricti:
      return { count: state.count + 1 };
    case typOdecti:
      return { count: state.count - 1 };
    default:
      throw new Error("nope");
  }
}

export function ReducerComp(): b.IBobrilNode {
  const [state, dispatch] = b.useReducer(reducer, { count: 1 });

  return (
    <>
      <button onClick={() => dispatch({ type: typOdecti })}>-</button>
      <span style={{ margin: 10 }}>{state.count}</span>
      <button onClick={() => dispatch({ type: typPricti })}>+</button>
    </>
  );
}
