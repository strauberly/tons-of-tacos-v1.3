"use client";
import classes from "./alert.module.css";
import { useDisplayContext } from "@/context/display-context";
import { useAlertContext } from "@/context/alert-context";
import { useRouter } from "next/navigation";
import FadeOnLoad from "../ui/animations/fade-on-load";
export default function Alert() {
  const { showAlert, setShowAlert } = useDisplayContext();
  const { alert } = useAlertContext();
  const router = useRouter();
  return (
    <>
      {showAlert && (
        <div>
          {/* <button
            className={classes.close}
            onClick={() => {
              setShowAlert(false);
              router.push("/");
            }}
          >
            X
          </button> */}
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
