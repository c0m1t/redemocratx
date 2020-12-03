import React, { ChangeEvent, useState } from "react";
import { AppNew } from "./AppNew";
import { AppOld } from "./AppOld";
import "./styles.css";

type RadioButtonValues = "old" | "new";

export default function App() {
  const [value, setValue] = useState<RadioButtonValues>("old");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value as RadioButtonValues);
  };
  return (
    <div className="App">
      <div className="main">
        <h1 className="title">Redemocratx (WIP)</h1>
        <p className="description">
          This demo shows how children and the parent can comminucate with
          eachother using context. Children will tell their parents that they
          have mounted, and will notify the parent when they unmount. But using
          context has a flaw. Because the parent cannot be notified before a
          child useEffect is called, so parent would not know about its children
          at its first render.
        </p>
        <div className="radio-buttons-container">
          <input
            checked={value === "old"}
            id="old"
            name="gender"
            onChange={handleInputChange}
            type="radio"
            value="old"
          />
          <label htmlFor="male">Context</label>
          <br />
          <input
            checked={value === "new"}
            id="new"
            name="gender"
            onChange={handleInputChange}
            type="radio"
            value="new"
          />
          <label htmlFor="female">Redemocratx</label>
          <br />
        </div>
      </div>
      {value === "old" ? <AppOld /> : <AppNew />}
    </div>
  );
}
