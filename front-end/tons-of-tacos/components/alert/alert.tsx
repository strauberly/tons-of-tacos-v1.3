"use client";
import classes from "./alert.module.css";
import { useDisplayContext } from "@/context/display-context";
import { useAlertContext } from "@/context/alert-context";
import { useRouter } from "next/navigation";
export default function Alert() {
  const { showAlert, setShowAlert } = useDisplayContext();
  const { alert } = useAlertContext();
  const router = useRouter();
  return (
    <>
      {showAlert && (
        <>
          <button
            className={classes.close}
            onClick={() => {
              setShowAlert(false);
              router.push("/");
            }}
          >
            X
          </button>
          <div className={classes.alert}>
            <div className={classes.alertBackground}>
              <pre>
                <p>{alert}</p>
              </pre>
            </div>
          </div>
        </>
      )}
    </>
  );
}
