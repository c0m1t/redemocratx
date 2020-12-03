import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IdsContext, ParentContext } from "./ParentContext";
import { wrapPromise } from "./wrapPromise";

function childPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Ringo Starr"
      });
    }, 2000);
  });
}

const resource = wrapPromise(childPromise());

export function Child() {
  const context = useContext(ParentContext);
  const ids = useContext(IdsContext);
  const [id] = useState(() => uuidv4());

  useEffect(() => {
    context?.setId(id);
    return () => {
      context?.removeId(id);
    };
  }, [context, id]);

  resource.read();

  //@ts-ignore
  if (!ids?.includes(id)) {
  }

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
