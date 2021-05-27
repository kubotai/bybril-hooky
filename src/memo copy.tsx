import * as b from "bobril";

export function Memo(): b.IBobrilNode {
  const [x, setX] = b.useState(0);
  const [y, setY] = b.useState(0);
  const [z, setZ] = b.useState(0);

  const xy = b.useMemo(() => {
    console.log("pocitam x + y");
    return x + y;
  }, [x, y]);

  const yz = b.useMemo(() => {
    console.log("pocitam y + z");
    return y + z;
  }, [y, z]);

  return (
    <div>
      <Input label="x" setValue={setX} />
      <Input label="y" setValue={setY} />
      <Input label="z" setValue={setZ} />

      <div>x + y = {xy}</div>
      <div>x + z = {yz}</div>
    </div>
  );
}

function Input(data: {
  label: string;
  setValue: (value: number) => void;
}): b.IBobrilNode {
  return (
    <div>
      <label>{data.label}:</label>
      <input
        type="text"
        onChange={(value: string) => data.setValue(Number(value))}
      />
    </div>
  );
}
