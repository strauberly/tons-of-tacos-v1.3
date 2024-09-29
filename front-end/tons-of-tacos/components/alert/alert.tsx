"use client";
import classes from "./alert.module.css";
import { useDisplayContext } from "@/context/display-context";
import { useAlertContext } from "@/context/alert-context";
export default function Alert() {
  const { showAlert } = useDisplayContext();
  const { alert } = useAlertContext();

  return (
    <>
      {showAlert && (
        <div className={classes.alert}>
          <pre>
            <p>{alert}</p>
          </pre>
        </div>
      )}
    </>
  );
}
