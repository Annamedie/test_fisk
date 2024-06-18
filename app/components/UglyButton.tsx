"use client";

import { updateUglyState } from "../fishCardactions";

interface UglyButtonProps {
  id: string;
  ugly: boolean;
}

export default function UglyButton(props: UglyButtonProps) {
  return (
    <button
      data-cy="ugly-button"
      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
      onClick={() => updateUglyState(props.id)}
    >
      {props.ugly ? "Nah you are cute!" : "Kinda ugly not gonna lie"}
    </button>
  );
}
