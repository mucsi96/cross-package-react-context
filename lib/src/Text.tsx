import React, { FC } from "react";
import { useText } from "utils";

export const Text: FC = () => {
  const text = useText();

  return <span>{`Provided text is ${text}`}</span>;
};
