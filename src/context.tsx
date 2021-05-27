import * as b from "bobril";

export const userInfoContext = b.createContext({
  name: "",
  weight: 0,
});

export function Context(): b.IBobrilNode {
  b.useProvideContext(userInfoContext, { name: "Kuba", weight: 185 });
  return <Nested1 />;
}

function Nested1(): b.IBobrilNode {
  return (
    <div style={{ padding: 20, backgroundColor: "red" }}>
      <Nested2 />
    </div>
  );
}

function Nested2(): b.IBobrilNode {
  return (
    <div style={{ padding: 20, backgroundColor: "blue" }}>
      <Consumer />
    </div>
  );
}

function Consumer(): b.IBobrilNode {
  const userInfo = b.useContext(userInfoContext);
  return (
    <div style={{ padding: 20, backgroundColor: "grey" }}>
      <div>Jmeno: {userInfo.name}</div>
      <div>Vaha: {userInfo.weight}kg</div>
    </div>
  );
}
