"use client";
import classes from "./alert.module.css";
import { useDisplayContext } from "@/context/display-context";
import { useAlertContext } from "@/context/alert-context";
import { useRouter } from "next/navigation";
import FadeOnLoad from "../ui/animations/fade-on-load";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Alert() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const { showAlert, setShowAlert } = useDisplayContext();
  const { alert, setAlert } = useAlertContext();
  const router = useRouter();
  console.log(alert);

  return (
    <>
      {showAlert && (
        <div className={classes.alertBackdrop}>
          <div className={classes.alert}>
            <div className={classes.alertBackground}>
              <pre>
                <p>{alert}</p>
              </pre>
              <button
                className={classes.close}
                onClick={() => {
                  setShowAlert(false);
                  router.push("/");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
