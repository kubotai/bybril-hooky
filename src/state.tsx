import * as b from "bobril";

export function State(): b.IBobrilNode {
  const [text, setText] = b.useState("");
  return (
    <div>
      <input type="text" onChange={setText} />
      <p>{text}</p>
    </div>
  );
}
