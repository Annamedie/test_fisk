"use client";

import { updateUglyState } from "../fishCardactions";

interface UglyButtonProps {
  id: string;
  ugly: boolean;
}

export default function UglyButton(props: UglyButtonProps) {
  return (
    <button className="bg-sky-300" onClick={() => updateUglyState(props.id)}>
      {props.ugly ? "Nah you are cute!" : "Kinda ugly not gonna lie"}
    </button>
  );
}
