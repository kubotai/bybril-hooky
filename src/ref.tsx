import * as b from "bobril";
import { INotificationManager } from "../src/notificationManager";

export function Ref(): b.IBobrilNode {
  const [value, setValue] = b.useState("");
  const inputRef = b.useRef<b.IBobrilCacheNode | undefined>(undefined);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => setValue(getInputValue(inputRef.current))}>
        Vypsat
      </button>
      <p>{value}</p>
    </div>
  );
}

function getInputValue(node?: b.IBobrilCacheNode): string {
  if (!node) {
    return "";
  }
  const element = b.getDomNode(node) as HTMLInputElement;
  return element.value;
}
