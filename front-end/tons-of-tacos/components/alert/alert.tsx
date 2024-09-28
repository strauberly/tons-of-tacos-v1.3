"use client";

import { useDisplayContext } from "@/context/display-context";
import classes from "./alert.module.css";
export default function Alert() {
  const { showAlert } = useDisplayContext();

  return (
    <div>
      <p>hi</p>
    </div>
  );
}
