"use client";

import { useDisplayContext } from "@/context/display-context";
import classes from "./alert.module.css";
import { useAlertContext } from "@/context/alert-context";
import { useEffect } from "react";
export default function Alert() {
  const { showAlert } = useDisplayContext();
  const { alert } = useAlertContext();
  // console.log("alert: " + alert);

  return (
    <>
      {showAlert && (
        <div>
          {/* <p>hi</p> */}
          <p>{alert}</p>
        </div>
      )}
    </>
  );
}
