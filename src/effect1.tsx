import * as b from "bobril";
import { queryHistoryAsync } from "./api";

export function Effect1(): b.IBobrilNode {
  const [history, setHistory] = b.useState<string[]>([]);
  const [newItem, setNewItem] = b.useState("");

  b.useEffect(() => {
    queryHistory(setHistory);
  }, []);

  return (
    <div>
      <input type="text" onChange={setNewItem} />
      <button onClick={() => setHistory([...history, newItem])}>Pridat</button>
      {history.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

async function queryHistory(
  setHistory: (history: string[]) => void
): Promise<void> {
  setHistory(await queryHistoryAsync());
}
