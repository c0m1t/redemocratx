import * as React from "react";
import "./styles.css";
import { Child, Parent } from "./old";

export function AppOld() {
  const [showFirstChild, setShowFirstChild] = React.useState(true);
  const [showSecondChild, setShowSecondChild] = React.useState(true);

  const handleFirstButtonClick = () => {
    setShowFirstChild((show) => !show);
  };

  const handleSecondButtonClick = () => {
    setShowSecondChild((show) => !show);
  };

  return (
    <div>
      <Parent>
        <button onClick={handleFirstButtonClick}>{`${
          showFirstChild ? "Hide" : "Show"
        } first child`}</button>
        <div className="child-wrapper">{showFirstChild && <Child />}</div>

        <button onClick={handleSecondButtonClick}>{`${
          showSecondChild ? "Hide" : "Show"
        } second child`}</button>
        <div className="child-wrapper">{showSecondChild && <Child />}</div>
      </Parent>
    </div>
  );
}
