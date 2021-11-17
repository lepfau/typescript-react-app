import React from "react";

interface Props {
  text: string;
  subtext: number;
  istrue?: boolean;
  fn: () => void
}


export const TextField: React.FC<Props> = ({ text, subtext, istrue, fn }) => {
  return (
    <div>
      <h1>hello im textfield</h1>
      <h2>{text}</h2>
      <h2>This is subtext number: {subtext}</h2>
      {istrue && <h3>I display if true</h3>}
      <button onClick={() => fn()}>Click</button>
    </div>
  );
};
