import React, { useContext, useEffect, useState } from "react";
import { ParentContext } from "./ParentContext";
import { v4 as uuidv4 } from "uuid";

export function Child() {
  const context = useContext(ParentContext);
  const [id] = useState(() => uuidv4());

  useEffect(() => {
    context?.setId(id);
    return () => {
      context?.removeId(id);
    };
  }, [context, id]);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {id.substring(0, 6)}
    </div>
  );
}
